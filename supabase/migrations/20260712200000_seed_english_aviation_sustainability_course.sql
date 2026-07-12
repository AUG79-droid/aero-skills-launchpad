-- Replace the initial seed with a complete English aviation-sustainability course.
-- The helper exists only for this migration and is removed at the end.

CREATE OR REPLACE FUNCTION public.seed_aeroskills_module(
  p_order_index integer,
  p_title text,
  p_description text,
  p_lessons jsonb,
  p_questions jsonb
)
RETURNS void
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $function$
DECLARE
  v_module_id uuid;
  v_quiz_id uuid;
  v_question_id uuid;
  v_lesson jsonb;
  v_question jsonb;
  v_option jsonb;
  v_lesson_order integer := 0;
  v_question_order integer := 0;
  v_option_order integer;
BEGIN
  SELECT id
  INTO v_module_id
  FROM public.modules
  WHERE order_index = p_order_index
  ORDER BY created_at
  LIMIT 1;

  IF v_module_id IS NULL THEN
    RETURN;
  END IF;

  UPDATE public.modules
  SET title = p_title,
      description = p_description,
      status = 'published',
      updated_at = now()
  WHERE id = v_module_id;

  DELETE FROM public.lessons WHERE module_id = v_module_id;
  DELETE FROM public.quizzes WHERE module_id = v_module_id;

  FOR v_lesson IN SELECT value FROM jsonb_array_elements(p_lessons)
  LOOP
    INSERT INTO public.lessons (module_id, title, content, order_index)
    VALUES (
      v_module_id,
      v_lesson ->> 'title',
      v_lesson ->> 'content',
      v_lesson_order
    );
    v_lesson_order := v_lesson_order + 1;
  END LOOP;

  INSERT INTO public.quizzes (module_id, title, passing_score)
  VALUES (v_module_id, p_title || ' — Knowledge Check', 70)
  RETURNING id INTO v_quiz_id;

  FOR v_question IN SELECT value FROM jsonb_array_elements(p_questions)
  LOOP
    INSERT INTO public.quiz_questions (quiz_id, question, order_index)
    VALUES (v_quiz_id, v_question ->> 'question', v_question_order)
    RETURNING id INTO v_question_id;

    v_option_order := 0;
    FOR v_option IN SELECT value FROM jsonb_array_elements(v_question -> 'options')
    LOOP
      INSERT INTO public.quiz_options (
        question_id,
        option_text,
        is_correct,
        order_index
      )
      VALUES (
        v_question_id,
        v_option ->> 'text',
        COALESCE((v_option ->> 'correct')::boolean, false),
        v_option_order
      );
      v_option_order := v_option_order + 1;
    END LOOP;

    v_question_order := v_question_order + 1;
  END LOOP;
END;
$function$;

SELECT public.seed_aeroskills_module(
  0,
  'Introduction to Aviation Sustainability',
  'Build a systems-level understanding of sustainability across the aircraft life cycle and learn how to turn ambition into credible action.',
  $lessons$[
    {
      "title": "Sustainability as a systems challenge",
      "content": "Sustainability is not a single environmental indicator. It is the ability to create long-term value while managing environmental, social and economic impacts together. In aviation, decisions about aircraft design, materials, energy, operations and infrastructure are deeply connected. Improving one indicator can sometimes worsen another, so teams need to identify trade-offs instead of optimising one number in isolation.\n\nA systems approach asks three questions: what is the full boundary of the decision, who is affected, and what happens over the complete life cycle? This prevents impact shifting, such as reducing operational emissions while increasing upstream material or energy impacts without understanding the net result.\n\nGood sustainability work is evidence-led, transparent about uncertainty and connected to engineering, operations, procurement, finance and safety rather than treated as a separate activity."
    },
    {
      "title": "The aviation life cycle",
      "content": "Aviation impacts occur before, during and after flight. Upstream stages include raw-material extraction, energy production, component manufacture and logistics. The use phase includes fuel production, airport activities, maintenance and aircraft operations. End-of-life decisions determine whether components and materials are reused, repaired, recycled, recovered or discarded.\n\nClimate change is a central issue, but it is not the only one. Relevant topics can include local air quality, noise, water use, hazardous substances, waste, resource depletion, land use and biodiversity. The importance of each topic depends on the activity, location and stakeholder context.\n\nLife-cycle thinking helps teams compare alternatives using consistent boundaries. It also shows why collaboration across the value chain is essential: no single organisation controls every impact."
    },
    {
      "title": "From commitments to credible action",
      "content": "A credible sustainability action starts with a defined baseline, a clear boundary and a measurable objective. It then identifies the technical or organisational lever, the owner, the resources required, the implementation date and the indicators that will demonstrate progress.\n\nAbsolute indicators show the total impact, while intensity indicators relate impact to an activity such as flight hours, production output or passenger-kilometres. Both can be useful, but an improving intensity metric does not automatically mean that total impact is falling.\n\nClaims should describe what has actually changed, which life-cycle stages are included and what evidence supports the result. Avoid vague language, hidden assumptions and double counting. Good governance includes documented methods, review, traceability and correction when better data becomes available."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "What best describes a systems approach to aviation sustainability?",
      "options": [
        {"text": "Optimising a single environmental metric regardless of other effects", "correct": false},
        {"text": "Considering connected impacts, stakeholders, boundaries and life-cycle trade-offs", "correct": true},
        {"text": "Focusing only on emissions during flight", "correct": false},
        {"text": "Treating sustainability as a communications activity", "correct": false}
      ]
    },
    {
      "question": "Why is life-cycle thinking important?",
      "options": [
        {"text": "It removes the need for data", "correct": false},
        {"text": "It ensures that only manufacturing is assessed", "correct": false},
        {"text": "It helps identify impacts that may be shifted between stages", "correct": true},
        {"text": "It guarantees that every alternative has zero impact", "correct": false}
      ]
    },
    {
      "question": "Which set of elements makes a sustainability action credible?",
      "options": [
        {"text": "A slogan, an image and an aspirational date", "correct": false},
        {"text": "A baseline, boundary, measurable objective, owner and evidence", "correct": true},
        {"text": "A percentage without a calculation method", "correct": false},
        {"text": "An intensity target only", "correct": false}
      ]
    },
    {
      "question": "What is a limitation of an intensity indicator?",
      "options": [
        {"text": "It can improve even while the total impact increases", "correct": true},
        {"text": "It can never be measured", "correct": false},
        {"text": "It always overstates environmental impact", "correct": false},
        {"text": "It is only used for noise", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  1,
  'Aviation and Climate Change: CO2 and Non-CO2 Effects',
  'Understand how carbon dioxide, nitrogen oxides, particles and contrails affect climate and why location and timing matter.',
  $lessons$[
    {
      "title": "Carbon dioxide and cumulative warming",
      "content": "Carbon dioxide is produced when carbon-based aviation fuel is burned. The amount released is closely related to fuel consumption and the carbon content of the fuel. CO2 remains in the climate system for a long time, so emissions accumulate and contribute to long-term warming.\n\nFuel efficiency therefore remains fundamental. Aerodynamic improvements, lighter structures, more efficient propulsion, better operations and lower-carbon energy carriers can all reduce the amount of fossil carbon added to the atmosphere.\n\nOperational efficiency alone is not sufficient if traffic growth outweighs efficiency gains. Climate planning must consider both emissions intensity and total emissions over time."
    },
    {
      "title": "Non-CO2 climate effects",
      "content": "Aircraft also influence climate through nitrogen oxides, water vapour, soot and sulphate particles, and condensation trails. Persistent contrails can spread into aviation-induced cirrus clouds. Unlike CO2, many non-CO2 effects depend strongly on altitude, weather, latitude, season and time of day.\n\nSome effects warm the climate and some produce cooling influences. Their combined impact is scientifically important but more uncertain than the impact of CO2. Uncertainty is not a reason to ignore them; it is a reason to use careful methods, ranges and transparent assumptions.\n\nReducing soot, improving combustion, using suitable fuels and avoiding climate-sensitive air masses on selected flights are areas of active research and operational testing."
    },
    {
      "title": "Making climate-informed decisions",
      "content": "A climate-informed decision should distinguish long-lived CO2 effects from shorter-lived non-CO2 effects. Combining everything into one number may be useful for some comparisons, but it can hide uncertainty and the different time horizons involved.\n\nMitigation options can create trade-offs. A route change that avoids a persistent contrail may increase fuel burn, while a fuel-saving route could pass through conditions that favour contrail formation. The best choice depends on the expected net climate effect, safety, airspace constraints and confidence in the forecast.\n\nTeams should document the metric, time horizon, data source and uncertainty used in each decision. This makes results comparable and prevents false precision."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "Why is reducing fuel burn important for climate mitigation?",
      "options": [
        {"text": "Fuel burn is closely related to the amount of CO2 released", "correct": true},
        {"text": "Fuel burn affects noise only", "correct": false},
        {"text": "CO2 disappears immediately after landing", "correct": false},
        {"text": "Fuel efficiency automatically eliminates all non-CO2 effects", "correct": false}
      ]
    },
    {
      "question": "Which statement about non-CO2 effects is correct?",
      "options": [
        {"text": "They are identical on every route and at every altitude", "correct": false},
        {"text": "They depend strongly on atmospheric conditions, location and timing", "correct": true},
        {"text": "They are fully understood and have no uncertainty", "correct": false},
        {"text": "They are caused only by airport buildings", "correct": false}
      ]
    },
    {
      "question": "What can make contrail avoidance a trade-off?",
      "options": [
        {"text": "A route change may reduce contrail warming but increase fuel burn", "correct": true},
        {"text": "Contrails form only on the ground", "correct": false},
        {"text": "Weather has no role in contrail formation", "correct": false},
        {"text": "Every altitude change reduces both CO2 and non-CO2 effects", "correct": false}
      ]
    },
    {
      "question": "How should uncertainty be handled in climate decisions?",
      "options": [
        {"text": "By hiding it to make the result look precise", "correct": false},
        {"text": "By ignoring all non-CO2 effects", "correct": false},
        {"text": "By documenting assumptions, ranges, metrics and data sources", "correct": true},
        {"text": "By replacing measurements with opinions", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  2,
  'Sustainable Aviation Fuel',
  'Learn what SAF is, how life-cycle performance varies by pathway and why certification, traceability and scale-up matter.',
  $lessons$[
    {
      "title": "What sustainable aviation fuel is",
      "content": "Sustainable aviation fuel, or SAF, is a broad term for certified aviation fuels produced from non-fossil or recycled-carbon resources and meeting defined sustainability requirements. Approved SAF pathways are designed to meet strict fuel-quality and safety specifications. Most current use involves blending an approved synthetic component with conventional jet fuel before it enters the aircraft fuel system.\n\nSAF is attractive because compatible blends can use much of the existing aircraft and airport fuel infrastructure. It can therefore contribute to emissions reduction in the current fleet while new aircraft technologies are developed.\n\nThe word sustainable is not automatic. Performance depends on the feedstock, production process, energy source, transport, land-use effects and the counterfactual use of the resource."
    },
    {
      "title": "Pathways and life-cycle performance",
      "content": "SAF can be produced through several pathways. Examples include hydroprocessed oils and fats, alcohol-to-jet routes, Fischer-Tropsch fuels from suitable waste or biomass streams, and synthetic e-fuels made from hydrogen and captured carbon dioxide.\n\nEach route has different resource demands and scalability constraints. Waste oils are limited, some biomass pathways can create land-use or biodiversity risks, and e-fuels require large amounts of low-carbon electricity and hydrogen. Life-cycle assessment is therefore essential.\n\nA robust comparison includes feedstock origin, additional energy demand, conversion efficiency, transport, co-products, direct and indirect land-use effects where relevant, and the fossil-fuel reference used for comparison."
    },
    {
      "title": "Deployment, traceability and credible claims",
      "content": "Physical SAF supply is constrained by production capacity, cost, logistics and airport infrastructure. Different accounting approaches may be used when the environmental attribute is separated from the physical delivery location. These systems require strong chain-of-custody rules.\n\nA credible SAF claim must specify the quantity, pathway, sustainability certification, life-cycle method, allocation rules and whether the claim concerns physical use or an accounting instrument. The same environmental benefit must not be claimed twice.\n\nSAF is a major decarbonisation lever, but it does not remove the need for efficient aircraft, better operations and demand-side measures. Supply must also grow without creating unacceptable impacts on food systems, ecosystems or communities."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "Why can SAF be used as a near-term aviation decarbonisation lever?",
      "options": [
        {"text": "Compatible blends can use much of the existing fleet and fuel infrastructure", "correct": true},
        {"text": "It requires every aircraft to be replaced immediately", "correct": false},
        {"text": "It has no fuel-quality requirements", "correct": false},
        {"text": "It produces no emissions during combustion", "correct": false}
      ]
    },
    {
      "question": "What determines the life-cycle performance of a SAF pathway?",
      "options": [
        {"text": "Only the colour of the fuel", "correct": false},
        {"text": "Feedstock, process energy, transport, land-use effects and allocation choices", "correct": true},
        {"text": "Only the aircraft manufacturer", "correct": false},
        {"text": "The route flown after refuelling", "correct": false}
      ]
    },
    {
      "question": "What is essential for a credible book-and-claim or mass-balance system?",
      "options": [
        {"text": "No records and no verification", "correct": false},
        {"text": "Strong traceability and prevention of double counting", "correct": true},
        {"text": "A guarantee that physical fuel is delivered to every claimant", "correct": false},
        {"text": "Ignoring the production pathway", "correct": false}
      ]
    },
    {
      "question": "Which statement is most accurate?",
      "options": [
        {"text": "Every fuel labelled SAF has the same environmental performance", "correct": false},
        {"text": "SAF eliminates the need for aircraft and operational efficiency", "correct": false},
        {"text": "SAF performance and scalability vary by pathway and resource base", "correct": true},
        {"text": "SAF can only be made from used cooking oil", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  3,
  'Hydrogen Aviation and the ZEROe Programme',
  'Explore hydrogen properties, aircraft architectures and the infrastructure and energy conditions required for credible climate benefits.',
  $lessons$[
    {
      "title": "Why hydrogen changes aircraft design",
      "content": "Hydrogen contains high energy per unit of mass but much less energy per unit of volume than conventional jet fuel. For aircraft applications it is generally considered in cryogenic liquid form, which requires very low storage temperatures, insulated tanks and new fuel-system architecture.\n\nTank volume and geometry influence the fuselage, payload, range and centre of gravity. Hydrogen cannot simply replace kerosene in a conventional wing tank without major design changes. Ground handling, venting, detection, maintenance and emergency procedures must also be adapted.\n\nThe potential is significant, but aircraft performance must be assessed at system level rather than by comparing fuel mass alone."
    },
    {
      "title": "Combustion and fuel-cell architectures",
      "content": "Hydrogen can be burned in modified gas turbines or converted to electricity in fuel cells. Combustion can deliver high power but may still form nitrogen oxides and produces water vapour. Fuel cells generate electricity electrochemically and can avoid combustion-related nitrogen oxides, but they require electric propulsion systems, thermal management and power-density improvements.\n\nDifferent architectures may suit different aircraft sizes and missions. Hybrid systems can combine fuel cells, batteries and turbines to meet continuous and peak power needs.\n\nThe ZEROe programme explores hydrogen technologies and aircraft concepts, but technology demonstration is not the same as a guaranteed entry-into-service date. Safety, certification, industrial maturity and infrastructure readiness determine the pace."
    },
    {
      "title": "The hydrogen ecosystem and climate conditions",
      "content": "Hydrogen is an energy carrier, not a primary energy source. Its climate performance depends on how it is produced. Hydrogen made using renewable or otherwise very low-carbon energy can have a much smaller upstream footprint than hydrogen produced from unabated fossil fuels.\n\nAviation use would require large-scale production, liquefaction, transport, airport storage and refuelling systems. Energy losses occur across these steps, so renewable-electricity availability and system efficiency are critical.\n\nHydrogen leakage, water-vapour effects, nitrogen oxides from combustion and the climate impact of new infrastructure must be included in the assessment. Credible planning therefore combines aircraft development with energy-system, airport and regulatory roadmaps."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "Why does liquid hydrogen require major aircraft-design changes?",
      "options": [
        {"text": "It has low volumetric energy density and needs cryogenic insulated tanks", "correct": true},
        {"text": "It is heavier per unit of energy than every other fuel", "correct": false},
        {"text": "It can be stored in any conventional wing tank without modification", "correct": false},
        {"text": "It requires no safety systems", "correct": false}
      ]
    },
    {
      "question": "Which is a key difference between hydrogen combustion and fuel cells?",
      "options": [
        {"text": "Fuel cells convert hydrogen electrochemically into electricity", "correct": true},
        {"text": "Fuel cells are conventional kerosene turbines", "correct": false},
        {"text": "Hydrogen combustion produces no water vapour", "correct": false},
        {"text": "Both architectures are identical", "correct": false}
      ]
    },
    {
      "question": "When can hydrogen offer strong climate benefits?",
      "options": [
        {"text": "Whenever it is called green, regardless of production", "correct": false},
        {"text": "When production and liquefaction use genuinely low-carbon energy and the full system is assessed", "correct": true},
        {"text": "Only when aircraft fly at lower altitude", "correct": false},
        {"text": "When upstream impacts are excluded", "correct": false}
      ]
    },
    {
      "question": "What determines the pace of hydrogen-aircraft deployment?",
      "options": [
        {"text": "A concept image alone", "correct": false},
        {"text": "Technology, safety, certification, industrial and infrastructure readiness", "correct": true},
        {"text": "Fuel colour", "correct": false},
        {"text": "Removing all ground procedures", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  4,
  'Operational Efficiency and Airspace',
  'Identify practical ways to reduce fuel burn and climate impact through flight planning, air traffic management, ground operations and maintenance.',
  $lessons$[
    {
      "title": "Aircraft and flight efficiency",
      "content": "Operational efficiency begins before departure. Accurate payload and fuel planning, lower unnecessary weight, appropriate speed, optimised climb and descent profiles, engine washing, aerodynamic cleanliness and well-maintained systems can all influence fuel consumption.\n\nEvery measure must remain within safety, reliability, performance and regulatory requirements. A small fuel-saving idea that creates operational instability or additional maintenance burden may not deliver a net benefit.\n\nThe strongest programmes use aircraft data, operational expertise and repeatable procedures to distinguish real savings from theoretical potential."
    },
    {
      "title": "Air traffic management and trajectory efficiency",
      "content": "Aircraft do not always fly the shortest or most fuel-efficient trajectory. Weather, military airspace, congestion, route structure, airport capacity and separation requirements can create additional distance, holding or level segments.\n\nBetter civil-military coordination, free-route airspace, continuous climb and descent operations, improved sequencing and data sharing can reduce avoidable fuel burn. Benefits depend on the network: optimising one flight in isolation can create delays or inefficiency elsewhere.\n\nTrajectory decisions must be evaluated using consistent baselines and real operational constraints."
    },
    {
      "title": "Climate-optimised operations and ground activity",
      "content": "Climate-optimised operations extend beyond fuel burn. Forecasts may identify regions where persistent contrails are more likely, allowing selected flights to consider small route or altitude changes when the expected benefit is robust and the fuel penalty is acceptable.\n\nOn the ground, electric ground-support equipment, reduced auxiliary-power-unit use, efficient taxi procedures and renewable electricity can lower emissions and local air pollutants. Maintenance actions that preserve aerodynamic and propulsion efficiency also matter over the aircraft life.\n\nOperational measures are valuable because many can be implemented faster than new aircraft technology, but savings must be monitored to avoid rebound effects and double counting."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "Which is an example of an operational fuel-efficiency lever?",
      "options": [
        {"text": "Carrying unnecessary contingency weight on every flight", "correct": false},
        {"text": "Accurate fuel planning and maintaining aerodynamic cleanliness", "correct": true},
        {"text": "Ignoring aircraft performance data", "correct": false},
        {"text": "Adding avoidable holding time", "correct": false}
      ]
    },
    {
      "question": "Why should airspace optimisation be considered at network level?",
      "options": [
        {"text": "Improving one trajectory can create constraints for other flights", "correct": true},
        {"text": "Weather affects only one aircraft per day", "correct": false},
        {"text": "Air traffic separation is optional", "correct": false},
        {"text": "Route length never affects fuel burn", "correct": false}
      ]
    },
    {
      "question": "What is required before applying a contrail-avoidance manoeuvre?",
      "options": [
        {"text": "A reliable forecast and an assessment of safety, airspace and fuel trade-offs", "correct": true},
        {"text": "A guarantee that every visible contrail is warming", "correct": false},
        {"text": "No weather information", "correct": false},
        {"text": "A large altitude change on every flight", "correct": false}
      ]
    },
    {
      "question": "Why must operational savings be monitored?",
      "options": [
        {"text": "To verify real performance and prevent double counting", "correct": true},
        {"text": "To replace safety requirements", "correct": false},
        {"text": "To make every route identical", "correct": false},
        {"text": "To remove the need for baselines", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  5,
  'CORSIA and Environmental Regulation',
  'Understand the role of CORSIA, the EU ETS, ReFuelEU Aviation and robust monitoring, reporting and verification.',
  $lessons$[
    {
      "title": "How CORSIA works",
      "content": "CORSIA is the global carbon-offsetting and reduction scheme for international aviation developed through ICAO. It applies to qualifying international routes between participating states and uses monitoring, reporting and verification of aircraft-operator CO2 emissions.\n\nThe pilot phase ran from 2021 to 2023, the first phase covers 2024 to 2026 and the second phase runs from 2027 to 2035. Participation rules and operator obligations vary by phase and state eligibility. CORSIA also recognises eligible fuels that meet defined sustainability and life-cycle requirements.\n\nCORSIA does not replace direct emissions reduction. Its compliance mechanism sits alongside aircraft technology, operational improvements and lower-carbon fuels."
    },
    {
      "title": "European policy instruments",
      "content": "Aviation in Europe is influenced by several policy instruments. The EU Emissions Trading System places a carbon price on covered aviation emissions. ReFuelEU Aviation sets minimum shares of sustainable aviation fuel supplied at eligible Union airports, beginning at 2 percent in 2025 and rising over time, including a sub-mandate for synthetic fuels.\n\nThe instruments address different actors and mechanisms. Fuel suppliers, aircraft operators, airports and authorities may each have distinct obligations. A single flight can therefore be affected by more than one regulatory framework.\n\nTeams should use the latest legal text and official guidance because scope, exemptions, monitoring rules and implementation details can change."
    },
    {
      "title": "Monitoring, reporting, verification and claims",
      "content": "Environmental regulation depends on reliable data. Monitoring plans define boundaries, methods, data sources, controls and responsibilities. Reports must use consistent units and calculation methods, while independent verification provides confidence that material errors have been identified.\n\nFuel and carbon claims require traceability. Certificates, sustainability attributes, emissions factors and chain-of-custody records must connect to the quantity claimed. Controls are needed to prevent the same reduction from being used by more than one party.\n\nCompliance data and voluntary communications serve different purposes. A compliant calculation is not automatically a complete statement of climate impact, especially when non-CO2 effects or wider life-cycle impacts are outside the regulatory boundary."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "What is the primary scope of CORSIA?",
      "options": [
        {"text": "Qualifying international aviation CO2 emissions", "correct": true},
        {"text": "All manufacturing waste worldwide", "correct": false},
        {"text": "Only airport noise", "correct": false},
        {"text": "Domestic road transport", "correct": false}
      ]
    },
    {
      "question": "Which CORSIA phase covers 2024 to 2026?",
      "options": [
        {"text": "The pilot phase", "correct": false},
        {"text": "The first phase", "correct": true},
        {"text": "The second phase", "correct": false},
        {"text": "The post-2050 phase", "correct": false}
      ]
    },
    {
      "question": "What does ReFuelEU Aviation primarily require?",
      "options": [
        {"text": "Minimum sustainable aviation fuel shares at eligible EU airports", "correct": true},
        {"text": "Immediate replacement of all aircraft", "correct": false},
        {"text": "Elimination of aircraft maintenance", "correct": false},
        {"text": "A single global ticket price", "correct": false}
      ]
    },
    {
      "question": "Why is independent verification important?",
      "options": [
        {"text": "It provides confidence in the completeness and accuracy of reported data", "correct": true},
        {"text": "It removes the need for monitoring", "correct": false},
        {"text": "It guarantees zero emissions", "correct": false},
        {"text": "It allows double counting", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  6,
  'Circular Economy in Aerospace Manufacturing',
  'Apply circular-economy principles to design, production, maintenance and end-of-life decisions in the aerospace value chain.',
  $lessons$[
    {
      "title": "The circular hierarchy",
      "content": "Circular economy aims to preserve the value of products, components and materials for as long as possible while reducing waste and demand for virgin resources. The preferred sequence is usually to prevent unnecessary material use, extend product life, reuse, repair, refurbish, remanufacture and then recycle. Disposal is the last option.\n\nRecycling is important, but it is not the whole circular economy. A component that can safely remain in service, be repaired or be remanufactured may retain more value and avoid more impact than one that is immediately converted into raw material.\n\nIn aerospace, every circular solution must comply with airworthiness, quality, configuration control, traceability and material-performance requirements."
    },
    {
      "title": "Design and production for circularity",
      "content": "Circularity begins at the design stage. Material selection, modularity, accessibility, joining methods, repairability and disassembly influence what can happen during maintenance and at end of life. Design teams can also reduce mixed-material assemblies that are difficult to separate, where performance and safety allow.\n\nProduction teams can improve nesting, reduce offcuts, segregate material grades, return packaging, reuse tooling and identify closed-loop recycling opportunities. High-quality segregation and contamination control increase the value of recovered material.\n\nA life-cycle assessment is needed because a heavier, more repairable or more recyclable design may affect operational performance. The best solution balances manufacturing, use and end-of-life impacts."
    },
    {
      "title": "Traceability and value-chain collaboration",
      "content": "Circular systems depend on information. Material composition, process history, maintenance status and configuration data help determine whether a part can be reused, repaired, remanufactured or recycled safely. Digital product records can support this decision, provided data quality and access are controlled.\n\nSuppliers, manufacturers, operators, maintenance organisations, dismantlers and recyclers need compatible specifications and commercial incentives. Take-back agreements and secondary-material standards can create demand and improve recovery rates.\n\nCircularity metrics should distinguish avoided material, life extension, reuse, closed-loop recycling, downcycling and disposal. A single recycling-rate percentage can hide important differences in retained value."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "Which option generally retains the most product value?",
      "options": [
        {"text": "Preventing waste and extending safe product life before recycling", "correct": true},
        {"text": "Immediate disposal", "correct": false},
        {"text": "Mixing all material grades together", "correct": false},
        {"text": "Removing traceability", "correct": false}
      ]
    },
    {
      "question": "Why is design important for circularity?",
      "options": [
        {"text": "Design determines repairability, disassembly and material choices", "correct": true},
        {"text": "Circularity begins only after disposal", "correct": false},
        {"text": "Design has no effect on maintenance", "correct": false},
        {"text": "Every material can be separated equally easily", "correct": false}
      ]
    },
    {
      "question": "What is essential for reuse or remanufacture in aerospace?",
      "options": [
        {"text": "Traceability, configuration control, quality and airworthiness compliance", "correct": true},
        {"text": "Deleting the component history", "correct": false},
        {"text": "Ignoring material condition", "correct": false},
        {"text": "Using only a recycling-rate target", "correct": false}
      ]
    },
    {
      "question": "Why can a single recycling-rate percentage be misleading?",
      "options": [
        {"text": "It may not distinguish closed-loop recycling, downcycling and retained value", "correct": true},
        {"text": "Recycling can never be measured", "correct": false},
        {"text": "All recycled materials have identical quality", "correct": false},
        {"text": "It always includes product-life extension", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

SELECT public.seed_aeroskills_module(
  7,
  'Roadmap to Net-Zero Aviation',
  'Connect technology, fuels, operations, infrastructure and policy into a realistic portfolio of actions toward long-term aviation climate goals.',
  $lessons$[
    {
      "title": "A portfolio, not a single solution",
      "content": "No single technology can decarbonise all aviation missions on its own. A credible roadmap combines fleet renewal, aircraft and engine efficiency, operational improvements, sustainable aviation fuel, new propulsion and energy systems, airspace modernisation, infrastructure, policy and carefully governed market mechanisms.\n\nThe contribution of each lever changes by aircraft size, mission, geography and time horizon. Battery-electric propulsion may suit smaller short-range aircraft, while SAF is particularly important for existing fleets and longer-range missions. Hydrogen may serve selected future segments if aircraft and energy ecosystems mature.\n\nRoadmaps should avoid adding the maximum theoretical potential of every lever because the assumptions can overlap or compete for the same resources."
    },
    {
      "title": "Dependencies, scenarios and uncertainty",
      "content": "A roadmap is a set of conditional pathways, not a prediction. It depends on technology maturity, certification, renewable-energy availability, fuel production, infrastructure investment, policy, customer demand, industrial capacity and workforce skills.\n\nScenario analysis tests how the plan performs under different assumptions. Useful scenarios can include slower fuel scale-up, delayed technology entry, higher energy prices, constrained biomass, stronger demand growth or faster airspace reform.\n\nMilestones should include decision gates and leading indicators, not only a distant end target. When assumptions change, the roadmap should be updated rather than defended as fixed."
    },
    {
      "title": "Turning the roadmap into team action",
      "content": "Every function can contribute. Engineering teams can improve efficiency and design for circularity. Manufacturing can reduce energy, material loss and process emissions. Procurement can strengthen supplier data and sustainability criteria. Operations and maintenance can preserve aircraft efficiency. Finance and programme teams can integrate carbon, resource and regulatory risks into decisions.\n\nA useful action plan defines the problem, baseline, lever, owner, timetable, resources, dependencies, KPI and verification method. It separates actions within the team's control from those requiring partners or policy.\n\nProgress should be communicated honestly: report delivered outcomes, explain the boundary and uncertainty, and distinguish current performance from future ambition."
    }
  ]$lessons$::jsonb,
  $questions$[
    {
      "question": "Why does net-zero aviation require a portfolio of levers?",
      "options": [
        {"text": "Different missions, fleets and time horizons require different solutions", "correct": true},
        {"text": "One technology is already suitable for every aircraft and route", "correct": false},
        {"text": "Operational efficiency has no value", "correct": false},
        {"text": "Infrastructure is unrelated to aircraft technology", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of scenario analysis?",
      "options": [
        {"text": "To test the roadmap under different assumptions and uncertainties", "correct": true},
        {"text": "To guarantee a single future", "correct": false},
        {"text": "To remove all decision gates", "correct": false},
        {"text": "To add overlapping theoretical savings without adjustment", "correct": false}
      ]
    },
    {
      "question": "What should a practical team action plan include?",
      "options": [
        {"text": "A baseline, owner, timetable, dependencies, KPI and verification method", "correct": true},
        {"text": "Only a long-term slogan", "correct": false},
        {"text": "A target without a boundary", "correct": false},
        {"text": "No named responsibility", "correct": false}
      ]
    },
    {
      "question": "How should progress be communicated?",
      "options": [
        {"text": "By distinguishing delivered outcomes from future ambition and explaining uncertainty", "correct": true},
        {"text": "By presenting assumptions as measured results", "correct": false},
        {"text": "By hiding the assessment boundary", "correct": false},
        {"text": "By counting the same reduction more than once", "correct": false}
      ]
    }
  ]$questions$::jsonb
);

DROP FUNCTION public.seed_aeroskills_module(integer, text, text, jsonb, jsonb);
