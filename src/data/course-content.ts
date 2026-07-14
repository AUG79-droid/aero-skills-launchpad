import { professionalDepthByLesson } from "./course-depth";

export type CourseLesson = {
  id: string;
  module_id: string;
  title: string;
  content: string;
  order_index: number;
};

const lesson = (
  moduleId: string,
  number: number,
  title: string,
  content: string,
): CourseLesson => ({
  id: `${moduleId}-lesson-${number}`,
  module_id: moduleId,
  title,
  content,
  order_index: number - 1,
});

const M1 = "f35868c6-ef6d-4d2e-937e-f8fd6fe69a5e";
const M2 = "80601dab-e1d8-4fba-b7eb-14c4d1cc1b63";
const M3 = "a976f431-fb64-45ea-aa08-6c330022521c";
const M4 = "e7c6459a-7eb1-452d-94eb-3d37037004b0";
const M5 = "2075611c-3d65-4554-9344-ecc3527a0b97";
const M6 = "addd634c-87e8-43c6-9095-b785a0c80c51";
const M7 = "54e69658-1cba-4e40-b56c-3450274fe03b";
const M8 = "ead97f8a-17ee-4635-bdae-d430a9a08365";

const baseLessonsByModule: Record<string, CourseLesson[]> = {
  [M1]: [
    lesson(M1, 1, "Sustainability as an aviation systems challenge", `
## Why isolated solutions fail

Aviation connects aircraft design, propulsion, energy supply, airports, air traffic management, manufacturing, maintenance, passenger demand and public policy. A change in one part of this system can create benefits or burdens elsewhere. Reducing aircraft mass can cut fuel burn in operation, for example, but the alternative material may require more energy to produce, be harder to repair or have fewer end-of-life routes.

Professional sustainability work therefore starts with three questions: **what system is being changed, which impacts are relevant and who controls each decision?** Climate change is central, but it is not the only environmental dimension. Noise, local air quality, water, waste, hazardous substances, land use, biodiversity and resource depletion can also be material.

### A practical decision frame

1. Define the service or function being delivered.
2. Set the boundary: product, site, flight, fleet or value chain.
3. Identify affected life-cycle stages and stakeholders.
4. Compare alternatives using consistent metrics and assumptions.
5. Test safety, certification, operational and industrial constraints.
6. Document residual impacts and the evidence behind the decision.

AVIATION CASE: Replacing a coating may reduce volatile organic compound emissions at a plant. The full decision must also assess corrosion protection, worker exposure, rework, curing energy, component life and approved-process requirements. The environmentally preferable option is the one that performs best across the relevant system while maintaining safety and airworthiness.

KEY TAKEAWAY: Sustainability is not a separate layer added after an engineering decision. It is a set of environmental criteria integrated into the same decision, with boundaries and trade-offs made explicit.

### Evidence base

- [Airbus lifecycle approach](https://www.airbus.com/en/sustainability/our-approach-to-sustainability/adopting-a-lifecycle-approach)
- [European Aviation Environmental Report 2025](https://www.easa.europa.eu/en/domains/environment/eaer)
    `),
    lesson(M1, 2, "The aircraft life cycle and environmental hotspots", `
## From raw materials to end of life

An aircraft can remain in service for decades. Its environmental footprint is distributed across raw-material extraction, material processing, component manufacture, final assembly, flight operations, maintenance, infrastructure and end of life. The dominant stage depends on the impact category and the question being asked.

For climate change in conventional commercial aviation, fuel use during operation is normally a major hotspot. For resource use or manufacturing waste, high-value metals, composites, machining yield, chemical processes and rejected parts may become more important. For local environmental management, a site's solvent use, wastewater, energy, noise and hazardous-material controls matter even when their contribution to the aircraft's total climate footprint is smaller.

### Hotspot analysis

- **Materials:** aluminium, titanium, composites, critical minerals and their production routes.
- **Manufacturing:** electricity and heat, surface treatment, machining scrap, consumables and rework.
- **Operation:** fuel burn, CO2, non-CO2 climate effects, noise and local air pollutants.
- **Maintenance:** replacement rates, cleaning, coatings, logistics and life extension.
- **End of life:** reuse, serviceable parts, material separation, closed-loop recycling and disposal.

AVIATION CASE: A kilogram of machining scrap is not equivalent to a kilogram of mixed waste. Clean, segregated aerospace-grade titanium can retain substantial technical and economic value. Once mixed or contaminated, recovery becomes more difficult and the material may be downcycled.

REFLECTION: Which environmental hotspot can your team influence directly? Which one requires collaboration with design, procurement, suppliers, operations or customers?

KEY TAKEAWAY: Life-cycle thinking prevents a local improvement from being presented as a total environmental improvement without evidence.
    `),
    lesson(M1, 3, "Metrics, baselines and credible evidence", `
## A number without context is not a result

Environmental performance must be tied to a defined baseline, boundary, method and time period. “Ten percent less waste” is incomplete unless the reader knows which waste streams, compared with which year, at which facilities, and whether changes in production volume were considered.

### Absolute and intensity indicators

**Absolute indicators** describe total impact, such as tonnes of CO2e, megawatt-hours of energy or tonnes of hazardous waste. **Intensity indicators** divide an impact by an activity measure, such as energy per flight hour, waste per delivered aircraft or solvent use per production hour. Both are useful, but they answer different questions. An intensity indicator can improve while total impact rises because activity has increased.

Credible monitoring uses a controlled calculation method, clear data ownership, versioned factors and quality checks. Estimated data should be identified as estimated. Where uncertainty is material, provide a range or sensitivity analysis rather than false precision.

### Minimum evidence package

- purpose and decision supported by the indicator;
- organisational and operational boundary;
- baseline year and reason it is representative;
- source data, units and conversion factors;
- treatment of missing data, rework and exceptional events;
- responsible owner, review frequency and verification route.

AVIATION CASE: Solvent consumption may rise during a retrofit-heavy year even if teams follow better practices. A useful dashboard shows both total consumption and a carefully selected activity-normalised indicator, while explaining programme mix and unusual maintenance work.

WATCH OUT: Never choose a denominator only because it makes performance look favourable. The activity measure must have a real causal relationship with the impact.

KEY TAKEAWAY: Evidence is credible when another qualified person can reproduce the result and understand its limitations.
    `),
    lesson(M1, 4, "Trade-offs, uncertainty and impact shifting", `
## Better decisions, not perfect answers

Environmental decisions rarely optimise every outcome simultaneously. A lighter component may reduce operational fuel burn but increase manufacturing energy. A longer route may avoid a climate-sensitive region but burn more fuel. A biofuel pathway may reduce fossil carbon yet create pressure on land, water or biodiversity.

The correct response is not to ignore the trade-off or abandon the decision. It is to compare alternatives transparently, define non-negotiable constraints and test how the result changes under different assumptions.

### Four tools for robust choices

1. **Hierarchy:** prevent impacts before reducing, reusing, recycling or compensating them.
2. **Multi-criteria assessment:** compare climate, resources, pollution, safety, cost and readiness without hiding conflicts.
3. **Sensitivity analysis:** vary uncertain assumptions such as electricity mix, service life or recycling yield.
4. **Decision gates:** proceed only when evidence, certification and infrastructure reach defined maturity.

AVIATION CASE: Contrail avoidance is promising because a limited number of flights may account for a disproportionate share of warming contrails. Yet a proposed trajectory change must still meet safety and airspace constraints and compare avoided non-CO2 warming with any additional CO2 from extra fuel.

WATCH OUT: Adding theoretical percentage savings from several measures can overstate the result. Measures interact, overlap and use different baselines.

REFLECTION: What would make your preferred option cease to be the best option? Naming that condition is a useful test of decision quality.

KEY TAKEAWAY: A professional recommendation explains both the benefit and the conditions under which that benefit is expected.
    `),
    lesson(M1, 5, "From ambition to controlled action", `
## Turning sustainability into execution

An ambition becomes operational only when it is translated into a controlled objective. Teams need a baseline, a specific outcome, an owner, resources, milestones, dependencies, a KPI and a verification method. Environmental management systems such as ISO 14001 reinforce this logic through risk-based planning, operational control, competence, monitoring and continual improvement.

### A strong action statement

“Reduce” is not enough. A controlled action should state **what will change, where, by how much, by when, who owns it and how the result will be verified**. It should also distinguish delivered performance from a future estimate.

AVIATION CASE: A project to improve metal circularity can include segregated collection at machining centres, contamination controls, contracts with qualified recyclers, closed-loop return routes, a mass-balance KPI and periodic verification of the destination and recovered grade. Reporting only the recycling rate would miss whether the material retained aerospace value.

### Credible communication

- Use specific claims instead of vague terms such as “green” or “eco-friendly”.
- State whether a figure is measured, modelled, forecast or aspirational.
- Describe the boundary and material exclusions.
- Avoid claiming that one initiative makes an aircraft, site or company “sustainable”.
- Keep the evidence available for review.

KEY TAKEAWAY: The strongest sustainability message is a controlled description of what changed, what was measured and what remains to be solved.

REFLECTION: Rewrite one current team ambition as a controlled objective with an owner, baseline, deadline and verification method.
    `),
  ],

  [M2]: [
    lesson(M2, 1, "CO2, fuel burn and cumulative warming", `
## Why aviation CO2 accumulates

Burning conventional jet fuel converts its carbon into carbon dioxide. CO2 persists in the climate system for a long time, so the warming influence depends on cumulative emissions rather than a single year's emissions alone. This makes near-term fuel and CO2 reductions valuable even while longer-term technologies are still developing.

Fuel efficiency can be expressed per passenger-kilometre, tonne-kilometre, flight or mission, but an intensity improvement is not automatically an absolute reduction. Traffic growth, load factor, fleet mix and mission length affect the total result.

### Main CO2 levers

- more efficient aircraft and propulsion;
- mass, drag and systems optimisation;
- operational and air-traffic improvements;
- lower-carbon energy carriers assessed on a life-cycle basis;
- demand and network measures where relevant;
- durable carbon removals for genuinely residual emissions.

AVIATION CASE: Replacing an older aircraft with a more efficient model can reduce fuel per seat-kilometre. The fleet-level result still depends on utilisation, seating configuration, load factor and whether capacity expands. A credible claim reports both the efficiency change and the effect on total emissions.

KEY TAKEAWAY: Fuel burn is a powerful operational proxy for CO2, but climate performance must be interpreted at the correct activity and system boundary.

### Evidence base

- [EASA aviation environmental impacts](https://www.easa.europa.eu/en/domains/environment/eaer/aviation-environmental-impacts)
    `),
    lesson(M2, 2, "Non-CO2 effects: NOx, particles and water vapour", `
## Aviation changes atmospheric chemistry and clouds

Aircraft engines emit nitrogen oxides, water vapour, soot and sulphur compounds in addition to CO2. At altitude these emissions can alter ozone and methane, influence aerosols and contribute to contrail-cirrus. Their net climate effect varies with altitude, latitude, season, time of day, weather and engine or fuel characteristics.

Non-CO2 effects are scientifically important but more uncertain than fuel-derived CO2. That uncertainty is not a reason to ignore them. It is a reason to use appropriate metrics, ranges and operational trials while continuing to improve monitoring.

### Why one multiplier is insufficient

A fixed factor applied to every tonne of aviation CO2 cannot represent route-specific atmospheric conditions. Different metrics also compare effects over different time horizons. A decision tool must state whether it estimates radiative forcing, temperature response, CO2-equivalent emissions or another measure.

AVIATION CASE: Two flights with similar fuel burn can have different non-CO2 effects because one crosses ice-supersaturated regions favourable to persistent contrails and the other does not.

WATCH OUT: “Zero CO2 at the exhaust” does not mean zero climate impact. Hydrogen combustion, for example, produces water vapour and may produce NOx; the full climate outcome also depends on hydrogen production.

KEY TAKEAWAY: Climate-informed aviation decisions consider CO2 and non-CO2 effects separately before combining them through a clearly stated metric.
    `),
    lesson(M2, 3, "Contrails and climate-sensitive regions", `
## From visible line to climate effect

Contrails form when hot, moist exhaust mixes with sufficiently cold ambient air. Most disappear quickly. Under ice-supersaturated conditions, some persist, spread and form contrail-cirrus. Whether a persistent contrail warms or cools depends partly on incoming sunlight, outgoing infrared radiation and time of day; the net effect across aviation is warming.

Research indicates that climate impact is concentrated in particular flights and atmospheric regions. This creates the possibility of targeted avoidance through small altitude or route changes rather than modifying every flight.

### Operational decision requirements

- reliable weather and contrail forecasts;
- integration with dispatch and flight-planning systems;
- safety, separation, capacity and crew considerations;
- calculation of additional fuel and CO2;
- post-flight verification and learning;
- a metric that compares CO2 and non-CO2 consequences.

AVIATION CASE: European research programmes are testing climate-optimised trajectories. A dispatcher may receive an alternative trajectory that avoids a forecast climate hotspot. The option should be accepted only after operational feasibility and the net climate trade-off are assessed.

REFLECTION: Why would a blanket instruction to change altitude on every flight be less credible than a targeted, forecast-based intervention?

### Evidence base

- [EASA Aviation Non-CO2 Experts Network](https://www.easa.europa.eu/en/research-projects/ancen-nonco2)
- [SESAR work on greener air traffic management](https://www.sesarju.eu/news/en-route-greener-air-traffic-management)
    `),
    lesson(M2, 4, "Noise and local air quality around airports", `
## Climate is not the only impact

Communities near airports can be affected by aircraft noise and local air pollutants. Relevant pollutants include nitrogen oxides, particulate matter and compounds from aircraft, auxiliary power units, ground-support equipment, road traffic and other airport sources.

Noise exposure depends on sound level, frequency, duration, time of day, flight path, building characteristics and community context. A quieter aircraft can reduce exposure, but traffic patterns and the number of events also matter. Local-air-quality action similarly requires a source inventory rather than attributing every concentration to aircraft engines.

### Integrated airport action

- quieter aircraft and noise-abatement procedures where safe;
- land-use planning and transparent community engagement;
- electrified or lower-emission ground-support equipment;
- fixed electrical ground power and pre-conditioned air;
- reduced taxi and auxiliary-power-unit use;
- monitoring networks and source-apportionment studies.

AVIATION CASE: Replacing diesel ground-support equipment with electric alternatives can reduce local emissions and noise. The project should also assess charging capacity, electricity source, battery safety, equipment availability and operational resilience.

KEY TAKEAWAY: A climate measure should not be described as a complete environmental solution. Airports and operators must manage climate, noise and local air quality through coordinated but distinct metrics.
    `),
    lesson(M2, 5, "Climate-informed decisions under uncertainty", `
## Acting while evidence develops

Decision-makers often face incomplete climate data. A robust approach separates well-established relationships from emerging estimates. Fuel-derived CO2 is comparatively straightforward to calculate. Route-specific non-CO2 effects require atmospheric modelling and carry greater uncertainty.

### A professional evidence ladder

1. **Measured:** fuel uplift, flight trajectory, engine data or monitored concentrations.
2. **Calculated:** emissions derived from controlled factors and known activity.
3. **Modelled:** climate response estimated using scientific models.
4. **Scenario-based:** possible future outcomes under stated assumptions.

Results from these levels should not be presented as if they had the same certainty. Pilots and trials are useful when they define a hypothesis, collect comparable data and include stop or review criteria.

AVIATION CASE: The EU non-CO2 monitoring, reporting and verification framework began in 2025. Its purpose is to improve the evidence base. It should not be interpreted as proof that every operational mitigation option is already mature.

WATCH OUT: Precision in a dashboard does not eliminate uncertainty in the underlying model.

KEY TAKEAWAY: Good climate governance makes uncertainty visible and still identifies decisions that are robust across a reasonable range of outcomes.

### Evidence base

- [EASA European Aviation Environmental Report executive summary](https://www.easa.europa.eu/en/domains/environment/eaer/executive-summary)
    `),
  ],

  [M3]: [
    lesson(M3, 1, "What SAF is — and what it is not", `
## A drop-in fuel category with conditions

Sustainable aviation fuel is a category of non-fossil or recycled-carbon aviation fuels that meets defined technical and sustainability requirements. Approved synthetic blending components are produced through certified pathways and blended with conventional jet fuel within permitted limits before use as finished aviation turbine fuel.

SAF can be a near-term decarbonisation lever because compatible blends can use much of the existing aircraft and fuel-distribution system. It does not make combustion emission-free: CO2, water vapour and other exhaust products still occur in flight. The potential benefit is assessed across the fuel life cycle, where biogenic or captured carbon and lower-emission production can reduce net greenhouse-gas emissions relative to fossil kerosene.

### Three separate questions

- **Technical:** Is the fuel approved and fit for safe aircraft use?
- **Sustainability:** Does the pathway meet environmental and social criteria?
- **Accounting:** Can the claimed environmental attribute be traced and allocated without double counting?

AVIATION CASE: A shipment may meet jet-fuel quality requirements yet fail a buyer's sustainability criteria because feedstock origin or chain-of-custody evidence is incomplete. Fuel quality certification and sustainability certification are related but different controls.

WATCH OUT: “Up to” life-cycle reductions are pathway-dependent potential values, not a guarantee for every batch.

KEY TAKEAWAY: SAF is not one fuel with one footprint. It is a family of pathways whose performance depends on feedstock, energy, process, logistics and accounting.
    `),
    lesson(M3, 2, "Feedstocks, pathways and conversion technologies", `
## Multiple routes to aviation fuel

SAF pathways differ in feedstock and conversion process. Examples include hydroprocessed esters and fatty acids using oils and fats, Fischer-Tropsch fuels from biomass or wastes, alcohol-to-jet routes and power-to-liquid e-fuels made from hydrogen and captured carbon.

Each pathway has different maturity, resource requirements and scalability constraints. Waste oils are relatively mature but limited in supply. Agricultural feedstocks require scrutiny of land-use change, biodiversity, food competition and agricultural inputs. E-fuels can reduce dependence on biological feedstocks but require large quantities of low-carbon electricity, hydrogen and a sustainable carbon source.

### Questions for pathway assessment

- Is the feedstock genuinely residual, or does demand change its market and land-use effects?
- What electricity, heat and hydrogen are used in production?
- How efficient is the conversion process?
- How far are feedstock and fuel transported?
- Which co-products receive part of the environmental burden?
- Can supply scale without undermining other sectors or ecosystems?

AVIATION CASE: Used cooking oil can deliver strong performance when provenance is verified. Rapid demand growth also increases fraud risk and pressure to misclassify virgin oils as waste. Traceability and certification are therefore operational controls, not administrative decoration.

KEY TAKEAWAY: Feedstock availability is not the same as sustainable availability. Scale must be tested against competing uses and environmental limits.
    `),
    lesson(M3, 3, "Life-cycle assessment and sustainability criteria", `
## Calculating the comparison with fossil kerosene

SAF life-cycle assessment typically includes feedstock cultivation or collection, transport, conversion, fuel distribution and combustion. It may also include direct and indirect land-use change, allocation to co-products and credits under defined methodologies.

The combustion of SAF still releases CO2. The accounting benefit arises because eligible biogenic or captured carbon is treated differently from additional fossil carbon, while upstream emissions are counted. The final value is highly sensitive to production energy, feedstock assumptions and the selected methodology.

### Credible interpretation

- compare fuels using the same functional unit and baseline;
- report the pathway and certification scheme;
- distinguish default values from actual batch values;
- identify land-use assumptions and material exclusions;
- avoid transferring one pathway's best result to all SAF.

AVIATION CASE: ICAO publishes methodology and default life-cycle values for CORSIA-eligible fuels. A supplier may use an applicable default or calculate an actual value under the approved rules. The claim must correspond to the certified batch and chain of custody.

WATCH OUT: Tailpipe CO2 and life-cycle CO2e are different metrics. Mixing them in a single sentence can mislead the audience.

### Evidence base

- [ICAO CORSIA eligible fuels](https://www.icao.int/CORSIA/corsia-eligible-fuels)
- [ICAO SAF lifecycle explanation](https://www.icao.int/CORSIA/fuels-lifecycle)
    `),
    lesson(M3, 4, "Certification, traceability and book-and-claim", `
## Protecting the environmental attribute

Physical SAF supply is concentrated at a limited number of airports. Chain-of-custody systems can separate the environmental attribute from the physical fuel so that demand can be supported without transporting small fuel batches inefficiently to every buyer.

Mass-balance and book-and-claim models require clear rules. The same environmental benefit must not be sold, counted or reported twice. Registries, transaction records, retirement of certificates, independent assurance and compatibility between schemes are therefore essential.

### Control points

1. certified producer and production site;
2. eligible feedstock and pathway;
3. verified quantity and life-cycle value;
4. custody transfers and registry entries;
5. allocation to a named customer or purpose;
6. retirement or cancellation of the attribute;
7. claim wording consistent with the system boundary.

AVIATION CASE: A corporate customer may fund SAF through a book-and-claim platform even though the physical fuel is used at another airport. The credible claim concerns an allocated life-cycle emissions benefit, not that the customer's specific aircraft contained that fuel.

WATCH OUT: A certificate is not sufficient if the underlying scheme allows overlapping claims or weak additionality statements.

KEY TAKEAWAY: Traceability connects a sustainability claim to a controlled quantity, pathway and owner.
    `),
    lesson(M3, 5, "Scaling SAF under ReFuelEU Aviation", `
## From voluntary projects to regulated demand

ReFuelEU Aviation establishes increasing minimum SAF shares for fuel supplied at eligible EU airports. The overall share began at **2% in 2025**, rises to **6% in 2030** and continues increasing toward 2050. A dedicated synthetic-fuel submandate starts in 2030. These obligations create demand certainty, but they do not remove supply, cost, electricity or feedstock constraints.

Scaling requires investment across production plants, renewable power, hydrogen, carbon sourcing, logistics, airport storage, blending, quality assurance and certification. It also requires disciplined claims so that regulatory compliance and voluntary purchases are not counted as the same additional action.

### What teams can influence

- engineering: compatibility, fuel-system knowledge and fleet readiness;
- procurement: sustainability criteria, contracts and traceability;
- operations: fuel logistics, quality and data capture;
- finance: long-term offtake structures and risk allocation;
- sustainability: life-cycle evidence, reporting and claim controls.

AVIATION CASE: A long-term offtake agreement can help a producer finance a facility. The buyer should still define volume flexibility, certification requirements, life-cycle thresholds, delivery or book-and-claim rules and remedies if the pathway does not perform as expected.

### Evidence base

- [European Commission ReFuelEU Aviation](https://transport.ec.europa.eu/transport-modes/air/environment/refueleu-aviation_en)

KEY TAKEAWAY: SAF scale-up is an industrial transformation programme, not simply a fuel-purchasing decision.
    `),
  ],

  [M4]: [
    lesson(M4, 1, "Hydrogen properties and aircraft integration", `
## A different energy carrier changes the aircraft

Hydrogen has high energy per unit of mass but very low energy per unit of volume. For aircraft use it is commonly considered as cryogenic liquid hydrogen, stored near minus 253 degrees Celsius in insulated tanks. These tanks are larger than kerosene tanks for the same usable energy and cannot simply reproduce conventional wing-tank architecture.

Aircraft integration must address tank shape and position, insulation, boil-off, ventilation, leak detection, ignition control, crashworthiness, maintenance access, centre of gravity and airport turnaround. The volume requirement affects fuselage layout, aerodynamics and payload-range performance.

### System-level design questions

- What mission and aircraft size fit the energy carrier?
- Where can tanks be integrated without compromising safety or performance?
- How are thermal loads and pressure managed?
- How will refuelling, maintenance and emergency response change?
- What certification evidence is required for new hazards?

AVIATION CASE: A cylindrical cryogenic tank is structurally efficient but integrates differently from a conformal kerosene wing tank. The decision propagates into cabin or cargo volume, aircraft balance, ground equipment and manufacturing architecture.

KEY TAKEAWAY: Hydrogen is not a substitute fluid. It creates a new aircraft and infrastructure system.
    `),
    lesson(M4, 2, "Hydrogen combustion and fuel-cell propulsion", `
## Two principal propulsion routes

In hydrogen combustion, modified gas turbines burn hydrogen to produce thrust. There is no carbon in the fuel, so direct CO2 from fuel combustion is avoided, but water vapour is produced and nitrogen oxides may form at high temperature. Combustor design and operating strategy are therefore important.

Fuel cells convert hydrogen electrochemically into electricity. Electric motors then drive propellers or fans. Fuel cells can be efficient and avoid combustion NOx, but the complete system includes stacks, thermal management, power electronics, motors and distribution equipment. Mass, heat rejection, altitude performance and redundancy shape the feasible mission.

### Compare architectures consistently

- full propulsion-system mass, not only converter efficiency;
- tank-to-propulsive-power efficiency;
- thermal-management and cooling drag;
- mission profile and reserve requirements;
- reliability, maintainability and certification;
- production and airport emissions upstream.

AVIATION CASE: A fuel-cell system may be attractive for shorter-range aircraft, while combustion can draw on turbine experience for other missions. This is not a universal ranking; it is a mission-specific architecture decision.

WATCH OUT: “Zero-emission aircraft” can be misunderstood. Always specify whether the statement refers to direct CO2, exhaust emissions or full life-cycle climate impact.

KEY TAKEAWAY: Propulsion concepts must be compared at aircraft and energy-system level, not by one component metric.
    `),
    lesson(M4, 3, "Producing low-emissions hydrogen", `
## The aircraft benefit begins in the energy system

Hydrogen is an energy carrier. Its climate performance depends on how it is produced. Electrolysis can split water using electricity; the resulting hydrogen is low-emissions only when the electricity supply and equipment life cycle support that conclusion. Hydrogen produced from fossil fuels without effective carbon management can have high upstream emissions.

Liquefaction consumes additional energy. Compression, storage, transport and distribution also add losses and infrastructure. Water availability and local environmental conditions must be considered when planning large production facilities.

### A robust hydrogen assessment includes

- electricity source and temporal matching;
- electrolyser efficiency and utilisation;
- upstream equipment and water requirements;
- liquefaction energy and boil-off;
- transport distance and mode;
- airport storage and dispensing;
- allocation where infrastructure serves several users.

AVIATION CASE: An airport supplied with hydrogen from a distant production site may face liquefaction and transport losses. Co-located production can reduce transport but may require major renewable-power and water infrastructure. The preferred option depends on regional conditions.

WATCH OUT: Colour labels such as “green” are not a substitute for a quantified life-cycle boundary.

KEY TAKEAWAY: Low direct aircraft CO2 is credible only when low-emissions hydrogen is available at the required scale.
    `),
    lesson(M4, 4, "Airport infrastructure, safety and operations", `
## A new fuel requires an ecosystem

Hydrogen aviation depends on coordinated readiness across production, transport, airport storage, refuelling, aircraft, regulation, emergency services and workforce competence. Infrastructure lead times may be as significant as aircraft-development lead times.

Hydrogen is highly flammable, diffuses rapidly and has cryogenic hazards in liquid form. Safe design uses prevention, detection, ventilation, separation, controlled ignition sources, compatible materials, procedures and trained response teams. Safety must be engineered through recognised hazard-assessment and certification processes.

### Turnaround and airport questions

- Can refuelling meet schedule and safety requirements?
- How are simultaneous servicing activities controlled?
- What exclusion zones and emergency routes are needed?
- How is boil-off captured or managed?
- Who owns fuel quality and custody transfer?
- Can infrastructure grow modularly with demand?

AVIATION CASE: A demonstration airport may initially use delivered liquid hydrogen and dedicated mobile equipment. Commercial scale could justify fixed storage and pipelines. Each stage needs a defined operating concept and transition plan.

REFLECTION: Which dependency would become the critical path if an aircraft were technically ready before airport supply?

KEY TAKEAWAY: Hydrogen-aircraft readiness and airport readiness must converge at the same place and time.
    `),
    lesson(M4, 5, "ZEROe as a technology and ecosystem programme", `
## Learning through demonstrators and partnerships

Airbus has explored hydrogen combustion and fuel-cell concepts through the ZEROe programme and related demonstrators. The professional lesson is broader than a single configuration: disruptive aircraft technologies require parallel maturation of propulsion, storage, aerodynamics, materials, certification, industrial systems and ground infrastructure.

Technology roadmaps should use evidence-based gates rather than a fixed date treated as a guarantee. A concept can be promising while key dependencies remain uncertain. Demonstrators reduce uncertainty by testing components, interfaces and operating assumptions.

### What a credible roadmap contains

- target mission and environmental objective;
- technology-readiness evidence and test programme;
- safety and certification strategy;
- industrialisation and supply-chain plan;
- airport and energy dependencies;
- decision gates, fallback options and transparent uncertainty.

AVIATION CASE: A propulsion demonstrator can validate performance and integration data, but it does not by itself prove commercial viability. Production rate, maintenance, airport availability, energy cost and customer operations remain part of the business and environmental case.

### Evidence base

- [Airbus sustainability approach](https://www.airbus.com/en/sustainability/our-approach-to-sustainability)
- [Airbus Pioneering sustainable aerospace publication](https://www.airbus.com/sites/g/files/jlcbta136/files/2025-04/2025_Airbus_Pioneering_sustainable_aerospace_publication.pdf)

KEY TAKEAWAY: A technology programme is credible when it links demonstrations to explicit system-level decision gates.
    `),
  ],

  [M5]: [
    lesson(M5, 1, "Aircraft efficiency across the mission", `
## Efficiency begins with the mission

Aircraft fuel burn is shaped by aerodynamic drag, structural and payload mass, propulsion efficiency, systems demand, weather, speed, altitude and mission length. Improvements should be evaluated over representative missions, not only at one design point.

Operational performance also depends on aircraft condition. Surface contamination, damaged seals, rigging deviations, engine deterioration and unnecessary onboard mass can erode the efficiency designed into the product. Maintenance and operations therefore protect environmental performance as well as reliability.

### Practical levers

- accurate performance models and flight planning;
- weight control and removal of unnecessary equipment or supplies;
- aerodynamic cleanliness and defect rectification;
- engine wash or maintenance based on approved performance evidence;
- efficient climb, cruise and descent profiles within safe procedures;
- fleet assignment matched to mission and demand.

AVIATION CASE: A small drag penalty repeated across a high-utilisation fleet can create significant annual fuel use. A maintenance campaign should quantify the baseline penalty, the recovered performance, recurrence rate and any material or labour impacts.

WATCH OUT: A theoretical engineering saving is not a delivered operational saving until fleet utilisation, implementation rate and rebound effects are included.

KEY TAKEAWAY: Protecting aircraft condition is a climate action because it preserves the efficiency already certified into the design.
    `),
    lesson(M5, 2, "Flight planning, fuel policy and payload", `
## Carry what is operationally required

Additional mass requires additional fuel, and carrying extra fuel itself creates a fuel-burn penalty. Safe fuel planning must always meet regulatory, company and operational requirements, but better information can reduce avoidable conservatism and unnecessary contingency.

High-quality planning uses current aircraft performance, route and weather data, expected air-traffic restrictions, alternate requirements and operational experience. Decisions must preserve captain authority and resilience; sustainability targets must never pressure crews to compromise safety margins.

### Control principles

- use accurate and current planning data;
- analyse systematic differences between planned and actual fuel;
- separate required reserves from discretionary additions;
- investigate recurring holding, diversion or congestion drivers;
- avoid targets that reward low uplift without considering operational context;
- verify savings at fleet level and adjust for schedule or network changes.

AVIATION CASE: A data review finds repeated overestimation of taxi time on a group of routes. Updating the planning model can reduce unnecessary uplift. The change should be monitored for fuel savings, delays, diversions and safety reports.

REFLECTION: Which KPI would prevent a fuel-efficiency programme from creating the wrong operational incentive?

KEY TAKEAWAY: Better fuel planning is evidence-led risk management, not simply carrying less fuel.
    `),
    lesson(M5, 3, "Trajectory and air-traffic-management efficiency", `
## The efficient trajectory is a network outcome

Continuous climb and descent, direct routing, reduced holding and optimised speed or altitude can lower fuel burn. Yet airspace is shared. Weather, military zones, airport capacity, separation requirements and traffic flows mean that one flight's shortest route may not be the best network solution.

Digital information sharing and trajectory-based operations can improve predictability. Better predictability allows aircraft, airlines, airports and air-navigation service providers to plan with less buffer and recover from disruption more efficiently.

### Evaluate an ATM measure through

- fuel and time saved across all affected flights;
- capacity and delay effects;
- safety and controller workload;
- weather resilience;
- additional distance shifted elsewhere in the network;
- implementation and equipage requirements.

AVIATION CASE: Allowing a flight to use a more direct route may save fuel for that aircraft but constrain a crossing flow. Network simulation can reveal whether the total result is positive.

### Evidence base

- [SESAR ALBATROSS demonstration report](https://www.sesarju.eu/sites/default/files/documents/solution/SolALBATROSS-RAD%20Demo%20Report%20TRL6.pdf)

KEY TAKEAWAY: Airspace sustainability is achieved through collaborative network optimisation, not isolated route shortening.
    `),
    lesson(M5, 4, "Climate-optimised operations and contrail avoidance", `
## Optimising beyond fuel burn

Traditional flight optimisation focuses mainly on fuel, time and cost. Climate-optimised operations add estimates of non-CO2 effects, particularly persistent contrails and NOx-related impacts. Because these effects vary with atmospheric conditions, the preferred route may change from day to day.

Targeted avoidance aims to modify only flights with a high forecast climate impact. Small altitude changes may avoid an ice-supersaturated region, but they can increase fuel burn or create airspace conflicts. The decision therefore requires a common climate metric and operational feasibility checks.

### Trial design

1. define the forecast product and confidence threshold;
2. identify eligible flights and operational constraints;
3. calculate baseline and alternative trajectories;
4. compare CO2 and non-CO2 effects;
5. record acceptance, rejection and reason codes;
6. verify outcomes using post-flight weather and trajectory data.

AVIATION CASE: In a dispatcher-supported trial, a climate-optimised trajectory is proposed before departure. Dispatch, crew and air-traffic control retain normal decision authority. The trial measures both avoided climate impact and the operational cost of the change.

WATCH OUT: A successful simulation is not yet a scalable operating procedure. Forecast quality, workload and airspace capacity must be demonstrated.

KEY TAKEAWAY: Climate optimisation is a controlled trade-off process, not a universal instruction to deviate.
    `),
    lesson(M5, 5, "Ground operations and verified performance", `
## Efficiency continues below the wing

Ground activities use fuel and electricity and affect local air quality, noise and turnaround reliability. Opportunities include fixed electrical ground power, pre-conditioned air, electric ground-support equipment, single-engine taxi where approved, towing concepts and reduced auxiliary-power-unit use.

The environmental benefit depends on local electricity, equipment utilisation, charging strategy and the operational consequence. An electric asset that is unavailable during peak periods may lead teams back to diesel backup equipment.

### Measurement plan

- establish baseline hours, fuel or electricity by equipment type;
- include availability, utilisation and maintenance;
- account for electricity generation and charging losses;
- track avoided APU or engine time without double counting;
- monitor turnaround, safety and resilience indicators;
- verify performance over representative seasons.

AVIATION CASE: Installing fixed ground power creates potential savings. Delivered savings require compatible stands, trained crews, reliable equipment and procedures that actually reduce APU use.

KEY TAKEAWAY: Operational sustainability is the verified difference between a baseline and real-world performance, not the nominal capability of installed equipment.
    `),
  ],

  [M6]: [
    lesson(M6, 1, "Why aviation environmental policy uses several instruments", `
## Different problems need different controls

International aviation crosses jurisdictions and involves aircraft operators, fuel suppliers, airports, manufacturers and air-navigation services. No single policy instrument controls every source or decision. Standards, emissions trading, fuel mandates, monitoring rules, airport regulation and research programmes therefore operate together.

### Instrument types

- **technical standards** influence aircraft and engine environmental performance;
- **market-based measures** create a price or obligation linked to emissions;
- **fuel mandates** create demand for eligible lower-emission fuels;
- **monitoring and verification** establish comparable evidence;
- **research and infrastructure policy** supports emerging solutions;
- **local permits and management systems** control site impacts.

AVIATION CASE: An airline may simultaneously report emissions under the EU ETS, CORSIA and national requirements while meeting ReFuelEU-related obligations through the fuel supply chain. The scopes and accounting rules differ, so one dataset cannot be reused blindly.

KEY TAKEAWAY: Compliance starts by mapping each legal instrument to the correct entity, route, fuel, geography, period and emissions boundary.
    `),
    lesson(M6, 2, "CORSIA scope, phases and obligations", `
## A global market-based measure for international aviation

CORSIA is ICAO's Carbon Offsetting and Reduction Scheme for International Aviation. It applies to qualifying CO2 emissions on covered international routes between participating states. It complements, rather than replaces, in-sector measures such as aircraft efficiency, operational improvement and eligible fuels.

CORSIA has a pilot phase from 2021 to 2023, a first phase from 2024 to 2026 and a second phase from 2027 to 2035. Participation rules change across phases. Operators monitor and report fuel use and CO2; offsetting requirements are calculated under ICAO rules and can be met using eligible emissions units and eligible fuels.

### Compliance logic

1. determine operator and route applicability;
2. monitor fuel and calculate CO2 using an approved method;
3. submit a verified emissions report through the state authority;
4. determine offsetting requirements;
5. claim eligible fuel reductions where requirements are met;
6. cancel eligible units and provide evidence.

AVIATION CASE: A flight is covered based on the states forming the route pair, not the nationality of individual passengers. Domestic emissions are outside CORSIA's international route-pair scope.

### Evidence base

- [ICAO CORSIA overview](https://www.icao.int/CORSIA)
- [ICAO CORSIA participating states and phases](https://www.icao.int/CORSIA/corsia-states-chapter-3-state-pairs)

KEY TAKEAWAY: CORSIA accounting must follow its own applicability and eligibility rules; it is not a generic company carbon-footprint system.
    `),
    lesson(M6, 3, "EU ETS and the non-CO2 MRV framework", `
## European carbon-market coverage

The EU Emissions Trading System covers specified aviation activities and requires operators to monitor, report and surrender allowances for covered emissions. Its geographic scope, exemptions and treatment of routes have changed over time, so teams must use the rules applicable to the reporting year rather than relying on an old summary.

Free aviation allowance allocation is being phased out, strengthening the carbon-price signal. A European monitoring, reporting and verification framework for aviation non-CO2 effects began in 2025 to build better evidence for future policy.

### Data-governance requirements

- approved monitoring plan and controlled methodology;
- complete flight and fuel records;
- documented treatment of data gaps;
- change control for systems and emission factors;
- internal review before independent verification;
- reconciliation between operational, financial and regulatory datasets.

AVIATION CASE: A flight may appear in operational systems, the EU ETS dataset and CORSIA reporting. Different scope rules mean that inclusion in one system does not automatically prove inclusion in another.

WATCH OUT: Regulatory summaries become obsolete. Always verify the current reporting-year scope and competent-authority guidance.

### Evidence base

- [EASA 2025 report executive summary](https://www.easa.europa.eu/en/domains/environment/eaer/executive-summary)

KEY TAKEAWAY: MRV quality depends on traceable flight-level data and controlled rule interpretation.
    `),
    lesson(M6, 4, "ReFuelEU Aviation and fuel-supply obligations", `
## Creating a European SAF market

ReFuelEU Aviation requires fuel suppliers at eligible EU airports to provide increasing shares of sustainable aviation fuel, including a submandate for synthetic fuels. It also contains obligations intended to limit avoidable fuel tankering and establishes reporting responsibilities across the system.

The overall SAF share started at 2% in 2025 and rises to 6% in 2030, 20% in 2035 and progressively to 70% in 2050. Synthetic-fuel requirements begin in 2030. Exact applicability and reporting must be checked against the regulation and implementing guidance.

### Implementation questions

- Which airports and fuel volumes are in scope?
- How is eligible SAF certified and reported?
- How are shortages or flexibility mechanisms handled?
- Which party owns each data element?
- How are regulatory and voluntary environmental claims separated?

AVIATION CASE: A fuel supplier's compliance volume may support the regulatory mandate. A customer making a separate voluntary claim must demonstrate that the same attribute has not already been allocated in an incompatible way.

### Evidence base

- [European Commission ReFuelEU Aviation](https://transport.ec.europa.eu/transport-modes/air/environment/refueleu-aviation_en)

KEY TAKEAWAY: Fuel regulation combines physical supply, sustainability eligibility and auditable information flows.
    `),
    lesson(M6, 5, "Audit-ready MRV and environmental claims", `
## From raw data to defensible disclosure

Monitoring, reporting and verification converts operational activity into regulated evidence. An audit-ready system preserves data lineage from source record to final disclosure. It also separates corrections, estimates and methodological changes.

### Control framework

- documented roles and segregation of duties;
- source-system interfaces and completeness checks;
- unit, factor and formula validation;
- exception reports and data-gap procedures;
- approval and version history;
- independent verification evidence and corrective actions;
- retention of supporting records.

Environmental communication should use the same discipline. A claim must identify the subject, boundary, period, metric and basis. Offsetting, in-sector reductions, SAF life-cycle benefits and future technology ambitions should never be merged into a single unexplained “net-zero” statement.

AVIATION CASE: A dashboard reports “30% lower emissions”. Review reveals that the number compares a SAF life-cycle estimate for one purchased volume with fossil fuel, not a 30% reduction in total flight emissions. The claim must be rewritten to match the actual boundary.

WATCH OUT: Independent verification increases confidence in reported data; it does not transform an incomplete boundary into a complete one.

KEY TAKEAWAY: Good MRV protects both compliance and reputation because every public number can be traced to a controlled calculation.
    `),
  ],

  [M7]: [
    lesson(M7, 1, "The circular hierarchy in an aerospace context", `
## Retain value before recovering material

Circular economy aims to preserve the value of products, components and materials while reducing virgin-resource demand and waste. The hierarchy generally favours prevention, long life, maintenance, reuse and remanufacture before recycling and disposal. Aerospace applies this hierarchy within strict safety, quality, configuration and airworthiness controls.

### Value-retention options

- prevent defects, overproduction and expired materials;
- design for durability, inspection, repair and upgrade;
- extend safe service through maintenance;
- reuse serviceable parts with full traceability;
- remanufacture or repair under approved data;
- recycle segregated high-quality material into valuable applications;
- recover energy or dispose only where higher options are not feasible.

AVIATION CASE: Extending the approved service life of a component can retain more embedded value than melting it for recycling. The life-extension route is acceptable only with the required engineering evidence and configuration control.

WATCH OUT: A high recycling rate may hide downcycling, loss of alloy quality or destruction of reusable parts.

KEY TAKEAWAY: Circularity is measured by retained function and material quality, not only by tonnes diverted from landfill.
    `),
    lesson(M7, 2, "Design for durability, repair and disassembly", `
## Circular outcomes are largely designed in

Material choice, joining method, accessibility, modularity, repair limits and information architecture determine what can happen later in the life cycle. A component that cannot be inspected or separated may be difficult to repair or recover even when its material is theoretically recyclable.

Design for circularity must be integrated with weight, fatigue, fire, toxicity, manufacturing, cost and certification requirements. The objective is not maximum disassembly at any price, but the best life-cycle outcome for the aircraft function.

### Design questions

- Can high-wear elements be replaced without discarding the whole assembly?
- Are materials and surface treatments identifiable?
- Can joints be opened safely and repeatably?
- Is approved repair data available?
- Can software or hardware be upgraded?
- Are hazardous substances controlled throughout the configuration?

AVIATION CASE: A bonded composite structure may offer weight and fatigue advantages but create different inspection, repair and end-of-life challenges from a mechanically fastened metallic structure. The decision requires a life-cycle comparison, not a single circularity score.

REFLECTION: Which design requirement in your area has the greatest downstream effect on maintenance waste or part life?

KEY TAKEAWAY: Circularity is an engineering requirement that must be considered before drawings and industrial processes are frozen.
    `),
    lesson(M7, 3, "Production yield, scrap and high-value materials", `
## Preventing waste at source

Aerospace manufacturing can generate substantial offcuts and machining chips because finished parts may be produced from larger forgings, billets or sheets. Yield improvement reduces purchased material, processing energy, cost and waste simultaneously.

Segregation is critical. Aluminium and titanium alloys can lose value when grades are mixed, contaminated by cutting fluids or combined with foreign materials. Digital material identity, dedicated containers and qualified recovery routes can support closed-loop recycling.

### Operational controls

- optimise nesting, near-net-shape supply and machining strategy;
- monitor buy-to-fly ratio and first-pass yield;
- prevent defects and rework through process capability;
- segregate alloy families at the point of generation;
- control contamination and storage;
- verify recycler destination and recovered grade.

AVIATION CASE: Airbus has described initiatives to increase titanium and aluminium circularity through consumption reduction, parts recovery and improved recycling. The transferable lesson is to manage material quality and traceability, not merely waste collection.

### Evidence base

- [Airbus: increasing titanium and aluminium circularity](https://www.airbus.com/en/newsroom/stories/2025-07-waste-not-want-not-increasing-titanium-and-aluminium-circularity)

KEY TAKEAWAY: The best scrap programme begins by avoiding scrap and preserving the purity of what remains.
    `),
    lesson(M7, 4, "Maintenance, reuse and serviceable parts", `
## Circularity during decades of operation

Maintenance extends aircraft life and preserves safety and performance. Repaired, overhauled or serviceable used parts can retain significant value, but their eligibility depends on approved processes, records, condition, life limits and configuration.

Circular decisions must distinguish between cosmetic damage, repairable damage, life-limited status and conditions that require rejection. Environmental pressure must never bypass engineering authority.

### Required enablers

- serial-number and configuration traceability;
- reliable component history and remaining life;
- approved inspection and repair data;
- controlled removal, storage and transport;
- quality release and airworthiness documentation;
- feedback from in-service performance to design.

AVIATION CASE: A removed component may be suitable for repair and return to service, use as a training asset, material recovery or disposal. A controlled decision tree retains the highest safe value while preventing unauthorised reuse.

WATCH OUT: “Reuse” without provenance can create safety, counterfeit-part and compliance risks.

KEY TAKEAWAY: In aerospace, traceability is the infrastructure that makes high-value circular strategies possible.
    `),
    lesson(M7, 5, "End-of-life aircraft and value-chain collaboration", `
## The final phase is planned long before retirement

Aircraft retirement involves owners, operators, maintenance organisations, parts traders, dismantlers, recyclers, manufacturers and authorities. Value can be recovered through serviceable parts, specialised equipment, metals and selected composite routes.

Environmental performance depends on the sequence and quality of decisions: depollution, documentation, safe dismantling, part assessment, material identification and controlled destinations. Export and waste-shipment rules may also apply.

### A credible end-of-life plan

1. secure aircraft and technical records;
2. remove fuels, fluids and hazardous items safely;
3. identify parts eligible for controlled reuse;
4. dismantle to preserve component and material value;
5. segregate alloys and composite streams;
6. verify downstream treatment and mass balance;
7. feed recovery lessons back into new design.

AVIATION CASE: Reporting only “percentage recovered by mass” can overemphasise heavy metals and ignore difficult composite, interior and hazardous streams. A stronger dashboard adds retained component value, closed-loop material quality and verified destination.

KEY TAKEAWAY: End-of-life performance is a value-chain result enabled by design data, traceability and qualified partners.
    `),
  ],

  [M8]: [
    lesson(M8, 1, "Net zero, absolute reductions and residual emissions", `
## Define the destination precisely

Net zero means balancing remaining anthropogenic greenhouse-gas emissions with removals after deep reductions. It is not the same as zero direct emissions, carbon neutrality for a limited activity or purchasing offsets without a reduction pathway.

Aviation roadmaps should distinguish CO2 from non-CO2 effects, sector emissions from company inventories and in-sector action from removals outside the sector. The boundary determines what the target actually covers.

### Credibility principles

- prioritise absolute emissions reductions;
- use a transparent baseline and coverage;
- set near- and medium-term milestones;
- explain the role and quality of removals or emissions units;
- avoid counting avoided emissions as reductions in the inventory;
- report progress and setbacks consistently.

AVIATION CASE: An aircraft technology may avoid direct fuel CO2 on a specific mission. A company-wide net-zero claim still requires upstream energy, manufacturing and other inventory sources to be assessed within the stated boundary.

WATCH OUT: “Net zero aviation” can refer to a global sector aspiration, a corporate target or a product concept. Never use the phrase without naming the subject and scope.

KEY TAKEAWAY: A target becomes credible when the audience can see what is reduced, what remains and how the balance will be achieved.
    `),
    lesson(M8, 2, "A portfolio of aircraft, fuel and operational levers", `
## No single solution fits every mission

Long-haul, short-haul, regional, cargo, defence and special-mission aircraft have different energy, payload and infrastructure needs. A realistic roadmap combines fleet renewal, aircraft and engine efficiency, operational improvement, SAF, emerging propulsion, infrastructure and policy.

Levers interact. More efficient aircraft reduce the quantity of SAF or hydrogen needed. Cleaner electricity improves e-fuel and hydrogen performance. Better airspace reduces both cost and energy demand. The portfolio should therefore be modelled as an integrated system.

### Portfolio questions

- Which lever applies to which fleet and mission?
- When can it reach material scale?
- What energy, feedstock and infrastructure does it require?
- Does it address CO2, non-CO2 or both?
- Which savings overlap with other levers?
- What happens if a critical technology is delayed?

AVIATION CASE: A roadmap assigns battery-electric propulsion to every route by 2035. A mission and energy-density review shows that this is not plausible. The portfolio is revised: efficiency and SAF carry more of the near-term long-haul pathway while electric and hydrogen options are tested for suitable missions.

KEY TAKEAWAY: Portfolio design matches each solution to the mission, time horizon and enabling system where it can deliver credible benefit.
    `),
    lesson(M8, 3, "Dependencies, scenarios and decision gates", `
## Roadmaps are conditional plans

Technology cost, renewable electricity, SAF supply, hydrogen infrastructure, certification, fleet turnover, traffic demand and policy can evolve differently from a central forecast. Scenario analysis tests whether the strategy remains credible under several coherent futures.

### Build useful scenarios

- vary high-impact assumptions rather than every parameter;
- keep internally consistent energy and technology assumptions;
- include downside cases, not only optimistic scale-up;
- identify no-regret actions shared across scenarios;
- define decision gates for major commitments;
- update the model when evidence changes.

AVIATION CASE: A hydrogen scenario assumes aircraft readiness but ignores airport supply. Adding infrastructure lead time moves the feasible entry point and changes which interim fuel and fleet actions are required.

REFLECTION: Which roadmap dependency is outside your organisation's direct control, and what partnership or fallback reduces that risk?

WATCH OUT: A smooth curve to 2050 can hide abrupt fleet, plant and infrastructure decisions. The roadmap should show real milestones and constraints.

KEY TAKEAWAY: Scenarios do not predict one future; they improve decisions that must be made before the future is known.
    `),
    lesson(M8, 4, "From global roadmap to team-level action", `
## Every function needs a line of sight

Sector pathways become real through thousands of decisions in engineering, procurement, production, maintenance, operations, finance and policy. Teams need actions proportionate to their influence rather than generic responsibility for a global target.

### Translate strategy into control

1. identify the environmental hotspot the team influences;
2. define a baseline and decision boundary;
3. select an action and owner;
4. identify dependencies and resources;
5. set leading and outcome indicators;
6. verify the delivered effect;
7. capture learning and scale successful controls.

AVIATION CASE: A manufacturing team cannot directly control airline fuel burn. It can improve first-pass yield, reduce process energy, protect product quality, segregate high-value scrap and provide reliable environmental data to design and procurement.

KEY TAKEAWAY: Team action is credible when it links a controllable decision to a measured environmental outcome and the wider aviation roadmap.
    `),
    lesson(M8, 5, "Governance, review and honest communication", `
## Keep the roadmap alive

A roadmap is a management system, not a publication. Governance should assign owners, integrate risk and investment decisions, review assumptions and explain deviations. Technical, environmental, financial and operational teams need a common evidence base.

### Review dashboard

- absolute and intensity emissions;
- technology and infrastructure milestones;
- SAF or low-emission energy volumes and certified performance;
- capital committed and projects delivered;
- dependencies at risk;
- forecast range versus actual performance;
- corrective decisions and next review date.

Communication should separate **delivered outcomes**, **contracted actions**, **modelled forecasts** and **long-term ambitions**. This prevents greenwashing and helps decision-makers see where support is needed.

AVIATION CASE: A programme misses an interim milestone because a supplier technology is delayed. Credible reporting explains the cause, environmental consequence, mitigation and revised decision gate instead of silently moving the date.

### Evidence base

- [IEA aviation overview](https://www.iea.org/energy-system/transport/aviation)
- [European Aviation Environmental Report 2025](https://www.easa.europa.eu/en/domains/environment/eaer)

KEY TAKEAWAY: Trust grows when progress, uncertainty and remaining gaps are governed and communicated with the same discipline.
    `),
  ],
};

export const expandedLessonsByModule: Record<string, CourseLesson[]> = Object.fromEntries(
  Object.entries(baseLessonsByModule).map(([moduleId, lessons]) => [
    moduleId,
    lessons.map((item) => ({
      ...item,
      content: `${item.content.trim()}\n\n${professionalDepthByLesson[item.id]?.trim() ?? ""}`.trim(),
    })),
  ]),
);
