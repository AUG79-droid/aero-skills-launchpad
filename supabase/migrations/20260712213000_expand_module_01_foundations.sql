-- Expand Module 01 into a substantive aviation sustainability learning unit.
-- This migration replaces the existing short lessons and knowledge check for module order_index 0.

DO $migration$
DECLARE
  v_module_id uuid;
  v_quiz_id uuid;
  v_question_id uuid;
BEGIN
  SELECT id INTO v_module_id
  FROM public.modules
  WHERE order_index = 0
  ORDER BY created_at
  LIMIT 1;

  IF v_module_id IS NULL THEN
    RAISE EXCEPTION 'Module 01 was not found';
  END IF;

  UPDATE public.modules
  SET title = 'Foundations of Aviation Sustainability',
      description = 'Understand aviation sustainability as a systems challenge and learn how to evaluate impacts, trade-offs, evidence and credible action across the aircraft life cycle.',
      status = 'published',
      updated_at = now()
  WHERE id = v_module_id;

  DELETE FROM public.lessons WHERE module_id = v_module_id;
  DELETE FROM public.quizzes WHERE module_id = v_module_id;

  INSERT INTO public.lessons (module_id, title, content, order_index)
  VALUES
  (
    v_module_id,
    '1. Why aviation sustainability is a systems challenge',
    $lesson$
## Learning objectives

By the end of this lesson, you should be able to explain why aviation sustainability cannot be reduced to a single emissions number, identify the main environmental, social and economic dimensions involved, and recognise when an apparently positive action may shift impacts elsewhere.

## Aviation connects multiple systems

Aviation is not only an aircraft in flight. It is a network of aircraft design and production, energy supply, airports, air traffic management, maintenance, digital infrastructure, passengers, freight, regulation and global supply chains. A decision in one part of this network can change impacts in another. A lighter component may reduce fuel burn but require a material with higher production impacts. A longer-lasting coating may reduce maintenance frequency but introduce a substance that needs stricter occupational and environmental controls. A route change may reduce contrail formation but increase fuel consumption.

This is why sustainability is best understood as a **systems challenge**. The objective is not to optimise one indicator in isolation. The objective is to improve the overall outcome while protecting safety, airworthiness, reliability, affordability and operational performance.

## The three dimensions

Environmental performance includes climate change, local air quality, noise, energy use, water, waste, hazardous substances, resource depletion, land use and biodiversity. Social performance includes worker health and safety, human rights, accessibility, community impacts, skills and a just transition. Economic performance includes long-term viability, resilience, productivity, innovation, infrastructure cost and the ability to scale solutions.

These dimensions are connected. A solution that is environmentally attractive but technically immature, unaffordable or impossible to scale will not transform the sector. Equally, a solution that is profitable but creates unacceptable environmental or social damage is not sustainable.

## Boundaries matter

Every sustainability claim depends on a boundary. Are we assessing only the flight? The complete fuel life cycle? Aircraft manufacture? Airport operations? The whole value chain? Different boundaries can produce different answers.

A useful first step is to state four things explicitly:

- **What activity or product is being assessed?**
- **Which life-cycle stages are included?**
- **Which impacts are measured?**
- **What baseline or alternative is used for comparison?**

Without those four elements, percentages such as “30% lower impact” can be technically meaningless.

AVIATION CASE: A team proposes replacing an aluminium panel with a composite panel because the composite is lighter. The operational benefit may be real, but the decision also needs to consider manufacturing energy, repairability, inspection methods, production scrap, end-of-life recovery and whether the mass saving is significant at aircraft level. The correct answer is not automatically “aluminium” or “composite”; it depends on the full system and the evidence.

REFLECTION: Think of one sustainability improvement in an aerospace workplace. Which impact could be reduced, and which impact could unintentionally increase?

KEY TAKEAWAY: Sustainability in aviation is the disciplined management of connected impacts and trade-offs across a complex system. A single positive metric is not enough to demonstrate a better overall outcome.
    $lesson$,
    0
  ),
  (
    v_module_id,
    '2. The environmental footprint across the aircraft life cycle',
    $lesson$
## From raw materials to end of life

An aircraft has environmental impacts long before its first flight and long after its final landing. Life-cycle thinking follows materials, energy and emissions through the complete value chain. It avoids the common mistake of focusing only on the stage that is easiest to measure.

### Raw materials and supply chains

Metals, composites, electronics, batteries, chemicals and other materials require extraction, processing and transport. Their impacts may include energy demand, greenhouse-gas emissions, water use, land disturbance, waste, hazardous substances and social risks in the supply chain. The impact of one kilogram of material depends on its origin, production route, recycled content, electricity mix and required quality.

### Design and manufacturing

Aircraft manufacturing uses electricity, heat, water, tooling, surface-treatment processes, logistics and specialised materials. Production impacts include direct emissions from facilities, purchased energy, material losses, solvents, chemical treatment, packaging and supplier activities. Design decisions influence not only mass and aerodynamic performance but also manufacturability, maintenance and end-of-life options.

### Operations and fuel

For conventional commercial aircraft, the use phase is usually the dominant contributor to climate impact because fuel is consumed over many years of operation. However, “dominant” does not mean “the only impact that matters.” Noise and local air pollutants affect communities around airports. Non-CO2 climate effects depend on altitude and atmospheric conditions. Ground operations use energy and equipment. Maintenance preserves safety and performance but also uses materials, energy and chemicals.

### Maintenance and life extension

Maintenance can create environmental impacts, but it also prevents larger impacts by keeping aircraft safe and efficient and extending useful life. Engine washing, surface condition, accurate rigging and timely repair can support operational efficiency. Component repair and remanufacture can retain more value than replacement, provided airworthiness, traceability and quality requirements are satisfied.

### End of life

At end of life, aircraft may be dismantled for parts reuse, material recovery and recycling. Some materials have well-established recycling routes; others are harder to separate or recover at high quality. A circular design considers disassembly, material identification, repairability and future recovery from the start.

## More than carbon dioxide

Climate change is central, but a complete environmental view also considers:

- nitrogen oxides, particles and contrail-related climate effects;
- local air quality near airports and industrial sites;
- aircraft and airport noise;
- energy and water use;
- hazardous substances and occupational exposure;
- production waste and material efficiency;
- land use, ecosystems and biodiversity;
- resilience to climate-related physical risks.

AVIATION CASE: An airport replaces diesel ground-support equipment with electric equipment. Tailpipe emissions and local noise can fall, but the total benefit depends on the electricity source, battery manufacture, charging infrastructure, utilisation rate and end-of-life management. The change is still potentially valuable, but the claim must use the correct boundary.

REFLECTION: Which life-cycle stage is most visible in your work? Which stages are easy to overlook because they occur elsewhere in the value chain?

KEY TAKEAWAY: Life-cycle thinking does not give every stage equal weight. It ensures that all relevant stages are considered before deciding where action produces the largest credible benefit.
    $lesson$,
    1
  ),
  (
    v_module_id,
    '3. Metrics, baselines and life-cycle evidence',
    $lesson$
## Why measurement quality matters

Sustainability decisions depend on data, but data are not automatically comparable or decision-ready. A good metric must have a clear definition, boundary, unit, data source and calculation method. It must also be connected to the decision being made.

## Absolute and intensity indicators

An **absolute indicator** measures the total impact, such as total tonnes of CO2-equivalent emitted by a site or fleet in a year. An **intensity indicator** relates impact to an activity, such as kilograms of CO2 per passenger-kilometre, megawatt-hours per aircraft delivered or kilograms of waste per production hour.

Intensity metrics are useful for comparing efficiency, but they can hide growth in total impact. A fleet can become more efficient per passenger-kilometre while total emissions increase because traffic grows. Credible reporting normally needs both absolute and intensity views.

## Baselines and counterfactuals

A baseline describes the starting point. A counterfactual describes what would have happened without the intervention. They are not always the same.

For example, a fuel-saving software update may be compared with the previous software version, with current fleet performance or with a scenario in which other efficiency improvements would have happened anyway. The claimed benefit depends on the comparison. A good analysis documents why the baseline is appropriate and avoids claiming savings that would have occurred without the project.

## Scope and ownership of emissions

Greenhouse-gas inventories often distinguish:

- **Scope 1:** direct emissions from sources controlled by the organisation;
- **Scope 2:** indirect emissions from purchased energy;
- **Scope 3:** other value-chain emissions, including purchased goods, logistics, business travel, product use and end-of-life activities.

These categories help organise inventories, but they do not replace life-cycle analysis. The same physical emission can appear in different organisations’ inventories because each organisation has a different reporting boundary. That is not necessarily double counting within an inventory standard, but reductions must not be sold or claimed twice as the same environmental attribute.

## Life-cycle assessment

Life-cycle assessment, or LCA, compares environmental impacts across defined stages of a product or service. A robust LCA states the functional unit, system boundary, data quality, allocation method, impact categories and uncertainty. Results are sensitive to assumptions about electricity, fuel pathways, material recycling, co-products and future operating conditions.

LCA is a decision-support tool, not an automatic truth machine. Two studies can reach different results because they answer different questions. The correct response is to compare methods and assumptions, not simply select the preferred number.

## Data hierarchy

Use the best available evidence for the decision:

1. measured primary data from the relevant process;
2. verified supplier or operational data;
3. representative industry datasets;
4. engineering estimates and models;
5. documented assumptions where no better data exist.

Uncertainty should be reported rather than hidden. A range with transparent assumptions is often more credible than a precise number built on weak data.

WATCH OUT: A percentage without a baseline, boundary and method is not evidence. “Up to 80% lower” may describe a best-performing pathway under specific assumptions, not every product or every real-world use.

AVIATION CASE: Two SAF pathways both meet fuel-quality requirements. One uses waste oil and the other uses renewable electricity, hydrogen and captured carbon. Their aircraft combustion characteristics may be similar, but their life-cycle impacts, resource constraints and scale-up challenges can be very different. The label “SAF” alone does not determine the result.

REFLECTION: What is one metric used in your work? Is it absolute or intensity-based? What behaviour does it encourage, and what could it hide?

KEY TAKEAWAY: High-quality sustainability evidence makes boundaries, baselines, methods and uncertainty visible. Good data support decisions; weak data create false confidence.
    $lesson$,
    2
  ),
  (
    v_module_id,
    '4. Managing trade-offs and avoiding impact shifting',
    $lesson$
## There is rarely a solution with zero impact

Aviation operates under strict constraints: safety, mass, volume, energy density, reliability, certification, infrastructure and cost. Most sustainability choices therefore involve trade-offs. The goal is not to pretend they do not exist, but to identify and manage them deliberately.

## Common trade-off patterns

### Mass versus other life-cycle impacts

Reducing aircraft mass can lower fuel use over many flights. However, an alternative material may require more energy to manufacture, be harder to repair or have limited recycling routes. The operational benefit must be compared with upstream and end-of-life impacts over the expected aircraft life.

### Efficiency versus operational resilience

A highly optimised system can reduce energy or material use but become less resilient to disruption. Very low inventories may reduce storage impacts while increasing the risk of urgent transport. Tighter fuel planning can reduce carried weight but must remain within all safety and operational requirements.

### Climate versus local environmental impacts

A technology may reduce CO2 while affecting nitrogen oxides, water vapour, noise or local air quality differently. Hydrogen combustion, for example, avoids fossil CO2 at the point of use but can still produce nitrogen oxides and water vapour. Electric ground equipment can reduce local emissions, while upstream electricity and battery impacts remain relevant.

### Short-term action versus long-term transformation

Operational improvements can deliver benefits quickly, while new aircraft architectures and energy systems require long development and infrastructure timelines. A credible strategy does both: capture near-term improvements without using them as a reason to delay structural change.

## A practical decision framework

When comparing alternatives, ask:

1. What problem are we trying to solve?
2. What is the baseline?
3. Which life-cycle stages and impacts change?
4. What safety, technical and regulatory constraints apply?
5. Who benefits and who may carry additional risk or cost?
6. What evidence supports the expected improvement?
7. How scalable is the solution?
8. How will performance be verified after implementation?

This framework prevents teams from starting with a preferred technology and searching only for evidence that supports it.

## Materiality and proportionality

Not every impact requires the same analytical effort. Materiality means focusing on impacts that are significant for the decision. Proportionality means using an assessment method appropriate to the scale and risk. A small workplace improvement may need a simple documented comparison; a new propulsion system requires extensive modelling, testing and certification evidence.

AVIATION CASE: A proposed route adjustment avoids a region with a high probability of persistent contrail formation but adds fuel burn. The decision should compare the expected climate benefit of contrail avoidance with additional CO2, forecast confidence, airspace constraints and safety. The optimal decision may vary by flight and weather conditions.

REFLECTION: Think of a project where the team focused strongly on one benefit. Which trade-off questions should have been asked earlier?

KEY TAKEAWAY: A trade-off is not evidence that action should stop. It is evidence that the decision needs a wider boundary, better data and explicit criteria.
    $lesson$,
    3
  ),
  (
    v_module_id,
    '5. From ambition to credible action',
    $lesson$
## Turning strategy into delivery

A sustainability ambition becomes credible only when it is translated into owned, measurable and verifiable action. Long-term targets provide direction, but day-to-day decisions determine whether progress is real.

## The anatomy of a strong action

A practical sustainability action should define:

- the problem and why it is material;
- the baseline and assessment boundary;
- the technical or organisational lever;
- the expected environmental and operational outcome;
- the owner and decision authority;
- resources, dependencies and risks;
- milestones and completion date;
- leading and lagging indicators;
- the verification method;
- how unintended effects will be monitored.

For example, “reduce production waste” is an ambition. “Reduce mixed aluminium offcut waste from process X by improving nesting and segregation, using a 2025 baseline, with monthly mass-balance verification and no loss of quality or traceability” is an actionable objective.

## Leading and lagging indicators

A **leading indicator** measures whether the conditions for success are being created: percentage of suppliers providing verified data, number of aircraft using an approved operational procedure, completion of infrastructure or workforce training.

A **lagging indicator** measures the resulting outcome: fuel saved, absolute emissions reduced, material avoided, waste diverted or noise exposure changed. Strong governance uses both. Leading indicators without outcomes can become activity reporting; lagging indicators without implementation evidence can be difficult to manage.

## Claims and greenwashing risk

A credible claim states what changed, compared with what, over which boundary and period, using which method. It distinguishes between:

- a measured reduction already achieved;
- an estimated future benefit;
- a contribution to a wider sector target;
- a purchased environmental attribute or offset;
- a corporate ambition.

These are not interchangeable. Future plans should not be presented as current performance. Avoid broad words such as “green,” “clean” or “zero-emission” without qualification. Even technologies with no in-flight CO2 can have upstream impacts and non-CO2 effects.

## Collaboration across the aviation value chain

Aircraft manufacturers cannot decarbonise aviation alone. Progress depends on airlines, airports, energy producers, air-navigation services, suppliers, regulators, researchers, financiers and customers. ICAO describes CORSIA as complementary to in-sector measures such as technology, operations and sustainable aviation fuels, while European policy instruments such as ReFuelEU Aviation influence fuel supply and traceability. Public Airbus decarbonisation material likewise presents a portfolio of aircraft efficiency, operations, SAF and future technologies rather than a single solution.

## Sources and further reading

- [European Aviation Environmental Report 2025 — EASA](https://www.easa.europa.eu/en/domains/environment/eaer)
- [Airbus public decarbonisation overview](https://www.airbus.com/en/sustainability/respecting-the-planet/decarbonisation)
- [ICAO CORSIA](https://www.icao.int/CORSIA)
- [European Commission — ReFuelEU Aviation](https://transport.ec.europa.eu/transport-modes/air/environment/refueleu-aviation_en)

AVIATION CASE: A team announces that a digital optimisation tool will save 10,000 tonnes of CO2 per year. Before publishing the claim, reviewers should confirm the baseline, actual deployment rate, whether savings overlap with other initiatives, whether the result is measured or modelled, the period covered and who owns the environmental attribute.

REFLECTION: Rewrite one broad sustainability ambition from your work as a measurable action with a baseline, owner, deadline and verification method.

KEY TAKEAWAY: Credibility comes from disciplined implementation, transparent evidence and honest communication. Ambition matters, but verified delivery matters more.
    $lesson$,
    4
  );

  INSERT INTO public.quizzes (module_id, title, passing_score)
  VALUES (v_module_id, 'Foundations of Aviation Sustainability — Knowledge Check', 70)
  RETURNING id INTO v_quiz_id;

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'Why is aviation sustainability best treated as a systems challenge?', 0)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'Because one change can affect multiple life-cycle stages, impacts and stakeholders', true, 0),
    (v_question_id, 'Because only aircraft manufacturing matters', false, 1),
    (v_question_id, 'Because every sustainability decision has a single obvious answer', false, 2),
    (v_question_id, 'Because safety and operational performance are unrelated', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'What is the main purpose of life-cycle thinking?', 1)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'To consider relevant impacts across stages and avoid shifting burdens elsewhere', true, 0),
    (v_question_id, 'To give every life-cycle stage exactly the same importance', false, 1),
    (v_question_id, 'To focus only on end-of-life recycling', false, 2),
    (v_question_id, 'To remove the need for operational data', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'Which statement about intensity indicators is correct?', 2)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'They can improve while total environmental impact still increases', true, 0),
    (v_question_id, 'They always show total impact', false, 1),
    (v_question_id, 'They cannot be used in aviation', false, 2),
    (v_question_id, 'They remove the need for a baseline', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'What information is essential for interpreting a percentage reduction claim?', 3)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'The baseline, boundary, method and period', true, 0),
    (v_question_id, 'Only the size of the percentage', false, 1),
    (v_question_id, 'Only the project name', false, 2),
    (v_question_id, 'The colour used in the presentation', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'Which is the strongest approach to uncertainty?', 4)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'Document assumptions, use ranges where appropriate and improve data over time', true, 0),
    (v_question_id, 'Hide uncertainty to make the result appear more precise', false, 1),
    (v_question_id, 'Avoid making any decision until uncertainty is zero', false, 2),
    (v_question_id, 'Use the most favourable estimate without explanation', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'What is the correct response when a sustainability option involves trade-offs?', 5)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'Assess the wider system, compare alternatives and make the criteria explicit', true, 0),
    (v_question_id, 'Reject every option that has any impact', false, 1),
    (v_question_id, 'Measure only the preferred benefit', false, 2),
    (v_question_id, 'Assume the newest technology is automatically best', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'Which example is an actionable sustainability objective?', 6)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'Reduce a defined waste stream against a stated baseline, with an owner, deadline and verification method', true, 0),
    (v_question_id, 'Become greener soon', false, 1),
    (v_question_id, 'Support sustainability whenever possible', false, 2),
    (v_question_id, 'Communicate an ambition without defining implementation', false, 3);

  INSERT INTO public.quiz_questions (quiz_id, question, order_index)
  VALUES (v_quiz_id, 'How should a future environmental benefit be communicated?', 7)
  RETURNING id INTO v_question_id;
  INSERT INTO public.quiz_options (question_id, option_text, is_correct, order_index) VALUES
    (v_question_id, 'As an estimate or ambition, with assumptions and uncertainty clearly stated', true, 0),
    (v_question_id, 'As a reduction already achieved', false, 1),
    (v_question_id, 'Without a boundary or method', false, 2),
    (v_question_id, 'As proof that no other impacts exist', false, 3);
END;
$migration$;
