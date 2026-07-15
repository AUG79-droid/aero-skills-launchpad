const M1 = "f35868c6-ef6d-4d2e-937e-f8fd6fe69a5e";
const M2 = "80601dab-e1d8-4fba-b7eb-14c4d1cc1b63";
const M3 = "a976f431-fb64-45ea-aa08-6c330022521c";
const M4 = "e7c6459a-7eb1-452d-94eb-3d37037004b0";
const M5 = "2075611c-3d65-4554-9344-ecc3527a0b97";
const M6 = "addd634c-87e8-43c6-9095-b785a0c80c51";
const M7 = "54e69658-1cba-4e40-b56c-3450274fe03b";
const M8 = "ead97f8a-17ee-4635-bdae-d430a9a08365";

const entries = (moduleId: string, lessons: string[]) =>
  lessons.map((content, index) => [`${moduleId}-lesson-${index + 1}`, content] as const);

export const advancedLearningByLesson: Record<string, string> = Object.fromEntries([
  ...entries(M1, [
    `
## Extended learning unit: thinking in systems

### Learning objectives

- Distinguish an environmental symptom from the system that produces it.
- Define a decision boundary without ignoring important upstream or downstream effects.
- Build a cause-and-effect map that includes safety, quality, cost and environmental constraints.

### Why aviation needs systems thinking

An aircraft is not an isolated product. It is part of a socio-technical system that connects design organisations, thousands of suppliers, production sites, energy networks, airports, airlines, air-navigation service providers, maintenance organisations, regulators and passengers. Environmental performance emerges from the interaction of these actors. A technically efficient component can therefore fail to deliver a system benefit if it is difficult to manufacture, maintain or operate, or if the energy and infrastructure it requires are not available.

Systems thinking begins with a **service or function**, not a fashionable solution. The function might be to transport a defined payload over a mission, protect an aluminium surface for a specified life, or provide conditioned air safely at the gate. The environmental question then becomes: which configurations can deliver that function with lower life-cycle impacts and acceptable technical risk? This wording keeps the comparison fair. Comparing one kilogram of two materials is misleading if different quantities, maintenance intervals or component lives are required.

A practical system map has four layers. First, define the decision and the physical boundary. Second, identify material, energy and information flows. Third, identify controls such as specifications, approvals, maintenance rules and contracts. Fourth, identify feedback: defects, operational data, customer reports, audits and environmental measurements. Feedback matters because a solution that works in a trial may behave differently at fleet or industrial scale.

### Airbus workplace case: changing a surface-treatment process

A plant considers replacing a chemical process to reduce hazardous substances and worker exposure. The purchasing comparison favours the new chemistry, but the system review identifies additional rinsing, higher bath temperature, a different wastewater load, supplier qualification, coating-adhesion testing and possible changes to production takt time. The project team therefore includes Environment, Industrial Hygiene, Process Engineering, Quality, Procurement, Production and the design authority. Environmental improvement is evaluated per conforming treated part, not per litre of purchased chemical.

The team also defines a rebound test. If lower toxicity causes the bath to be replaced twice as often, or increases rework, the anticipated benefit may shrink. A pilot records bath life, water, energy, chemical top-up, rejected parts, waste classification and operator feedback. Only after technical qualification and a representative production run is the process considered for scale-up.

### Decision lab

A proposal reduces solvent use by 30%, but electricity rises by 12 MWh per month and first-pass yield falls from 98.5% to 97.0%. Calculate the additional rejected parts for 10,000 monthly units. Then identify the information needed to compare avoided solvent impact, additional electricity and the footprint of remanufacturing 150 extra parts. The correct answer is not a single score; it is a controlled evidence plan.

### What professional practice looks like

- The functional requirement and non-negotiable constraints are written first.
- Benefits and burdens are traced across departments and life-cycle stages.
- Uncertainty and missing data are visible in the decision record.
- Pilot results are verified before annual savings are claimed.
- A named owner monitors unintended effects after implementation.

WATCH OUT: A system diagram is not useful merely because it contains many boxes. It must show which relationships can change the decision and who controls them.
    `,
    `
## Extended learning unit: life-cycle assessment for aerospace decisions

### Learning objectives

- Explain the four phases of an ISO-aligned life-cycle assessment.
- Select a functional unit and boundary suited to an aerospace comparison.
- Recognise allocation, data-quality and end-of-life assumptions that can reverse a result.

### From footprint number to decision model

Life-cycle assessment, or LCA, is a structured method for evaluating inputs, outputs and potential environmental impacts across a product system. The four linked phases are goal and scope definition, life-cycle inventory, impact assessment and interpretation. They are iterative: finding an important data gap during interpretation may require a revised inventory or even a clearer goal.

The **functional unit** is the quantified service against which alternatives are compared. For an aircraft concept it could be one tonne-kilometre delivered over a defined mission and service life. For packaging it might be protection and delivery of 1,000 conforming components. For a coating it could be corrosion protection of one square metre for a specified period under defined conditions. The functional unit prevents a lighter, shorter-lived or less effective option from receiving an unfair advantage.

The system boundary determines which processes are included: raw-material extraction, precursor production, component manufacturing, transport, assembly, operation, maintenance and end of life. A cradle-to-gate study can support a manufacturing choice, while a propulsion comparison normally requires a wider life cycle. The report must say what is excluded and why. Cut-off criteria based only on mass can miss low-mass substances with high toxicity or climate impacts.

### The inventory and data hierarchy

Primary data from the actual process or supplier is preferable for material flows under direct influence. Secondary databases are necessary for background processes such as electricity generation or commodity production. Data quality should be evaluated for technological, geographical and temporal representativeness. An average European electricity factor may not represent a specific site or a future hydrogen-production contract.

Allocation is needed when one process produces several products or recycling creates benefits across product lives. Mass, energy content and economic value can produce different answers. The chosen rule must follow the study goal and be tested in sensitivity analysis. End-of-life credits are particularly sensitive: stating that aluminium is “recyclable” is not the same as demonstrating collection, alloy segregation, processing yield and displacement of primary production.

### Aerospace case: lighter component versus higher production impact

Option A saves 8 kg per aircraft but has 2.5 tonnes more production CO2-equivalent than Option B. If the verified in-service saving is 0.025 kg of fuel per flight hour per kilogram removed, an aircraft flying 3,000 hours per year saves 600 kg of fuel annually. Using approximately 3.16 kg CO2 per kilogram of fuel, the operational saving is about 1.90 tonnes of CO2 per year. The climate break-even is therefore roughly 1.3 years, before considering upstream fuel emissions, maintenance and end of life.

This calculation is a screen, not a complete LCA. The team tests utilisation, component replacement, fuel-saving uncertainty and electricity scenarios. If the component is used on a low-utilisation mission, the result may differ.

### Applied task

Choose one product or process from the workplace. Write the goal, intended audience, functional unit, boundary, reference flow and three assumptions most likely to affect the conclusion. For each assumption, define a low and high scenario. A useful screening LCA ends with a decision recommendation and a plan to improve material data—not merely a chart of impact categories.

KEY TAKEAWAY: LCA does not remove judgement. It disciplines judgement by making the comparison, assumptions and trade-offs explicit.
    `,
    `
## Extended learning unit: metrics, baselines and assurance

### Learning objectives

- Design an environmental indicator that answers a defined management question.
- Separate absolute change, intensity change and structural change.
- Apply basic data-quality and assurance controls to an environmental calculation.

### The anatomy of a credible metric

Every indicator needs a purpose, owner, formula, unit, boundary, frequency, source system and decision threshold. “Waste per aircraft” is not sufficiently defined if aircraft work packages vary radically. A better denominator may be direct production hours, kilograms of material processed, treated surface area or completed operations. The denominator should have a plausible causal relationship with the environmental flow and remain available with adequate quality.

Absolute and intensity indicators answer different questions. Absolute energy shows the pressure placed on the climate and energy system. Energy per production hour shows process efficiency. A site can improve intensity while total energy rises because activity expands; it can also reduce total energy during a shutdown while efficiency deteriorates. A professional dashboard reports both and explains volume, mix and boundary effects.

A baseline should be representative, reproducible and sufficiently recent. Before choosing it, test for exceptional shutdowns, production transfers, incomplete meters and changes in organisational scope. If the baseline is recalculated after an acquisition, metering correction or emission-factor change, preserve both the original and restated series and document the rule. Otherwise progress can appear to change without any physical improvement.

### Data lineage and control

Data lineage traces a figure from the source—meter, purchase record, maintenance system or supplier certificate—through transformations to the reported KPI. Minimum controls include unit validation, duplicate detection, completeness tests, approval of manual adjustments, version-controlled factors and reconciliation with an independent total. Estimates should be flagged, not silently mixed with measurements.

Assurance focuses on material misstatement. Materiality is not only numerical: a smaller value may be material because it relates to a public target, legal obligation or sensitive claim. The reviewer tests evidence, calculation logic and consistency rather than merely checking that a spreadsheet has no formula errors.

### Worked case: solvent intensity

In the baseline year a site purchased 102 tonnes, stock increased by 4 tonnes and 6 tonnes were returned unused. Estimated consumption is therefore 92 tonnes before other adjustments. In the reporting year purchases are 96 tonnes, stock falls by 3 tonnes and returns are 2 tonnes, giving 97 tonnes. Comparing purchases alone would suggest a 5.9% reduction; the simplified material balance suggests a 5.4% increase in consumption.

If relevant production hours rose from 46,000 to 55,000, intensity improved from 2.00 to 1.76 kg per hour, about 12%. The management conclusion must show both: process intensity improved while absolute consumption rose due to activity. Waste, emissions, rework and product mix should be used as diagnostic indicators.

### Applied assurance exercise

Take one current KPI and create a one-page definition containing formula, data owner, operational owner, inclusion rules, exclusions, factor source, uncertainty, evidence-retention period and restatement rule. Ask a colleague unfamiliar with the calculation to reproduce one month. Every question they need to ask exposes missing control documentation.

WATCH OUT: Extra decimal places do not create accuracy. Report precision that reflects the quality of the underlying data.
    `,
    `
## Extended learning unit: trade-offs and decisions under uncertainty

### Learning objectives

- Distinguish uncertainty, variability and lack of knowledge.
- Use sensitivity and scenario analysis to test a preferred environmental option.
- Document trade-offs without hiding them inside a composite score.

### Why a single score can mislead

Aerospace decisions often involve climate, resource use, water, toxicity, local pollution, circularity, safety, performance, industrial maturity and cost. Multi-criteria analysis can organise these dimensions, but weighting them is a value judgement. If the weighting is invisible, the apparent precision of the final score can conceal the real decision.

Begin with **screening constraints**. Any option that fails safety, legal, airworthiness or essential functional requirements is removed or sent for further development. Compare remaining options against criteria that are distinct enough to avoid double counting. Define the direction of preference, scale and evidence for each criterion. Keep raw results visible beside any normalised score.

Uncertainty concerns incomplete knowledge of a value or relationship; variability is real difference across missions, sites or time. They require different treatments. Better measurement can reduce parameter uncertainty, but it cannot remove genuine variability in weather or utilisation. Scenario analysis represents coherent futures, such as high renewable-electricity availability or delayed SAF scale-up. Sensitivity analysis changes one or more assumptions to see what drives the outcome.

### Aerospace case: aluminium versus composite panel

A composite option reduces aircraft mass and corrosion maintenance but may require energy-intensive production and has less mature high-value recycling. The aluminium option is heavier but benefits from established repair and recycling systems. A comparison covers production yield, part mass, operational hours, repair frequency, service life, electricity mix and actual end-of-life routes.

The team calculates a mass-related operational benefit under low, central and high utilisation. It tests production electricity in two regions and two end-of-life assumptions. If composite ranks first only under high utilisation and perfect recycling, the decision should be conditional rather than advertised as universally superior. Engineering may still choose it for performance, but the environmental rationale must state the conditions.

### A transparent decision protocol

1. Define function, viable alternatives and non-negotiable constraints.
2. Record criteria and why each matters.
3. Show physical results before scoring or weighting.
4. Assign evidence quality and uncertainty ranges.
5. Test alternative weights and boundary assumptions.
6. Identify the switching point at which the preferred option changes.
7. Record the final decision, dissent and review trigger.

### Decision lab

Option A costs €20,000 more and saves an estimated 40–80 tonnes CO2-equivalent over its life. Option B has lower climate benefit but avoids a substance of very high concern. Do not calculate a winner immediately. First identify whether the substance criterion is a mandatory control, whether exposure and substitution requirements have been assessed, and whether the climate ranges overlap. Then define what further evidence has the greatest decision value.

REFLECTION: Which assumption in a recent sustainability proposal, if wrong, would reverse the recommendation? That assumption should be monitored as a decision risk.
    `,
    `
## Extended learning unit: turning ambition into controlled performance

### Learning objectives

- Translate an environmental ambition into objectives, actions and operational controls.
- Distinguish leading indicators from outcome indicators.
- Define governance that sustains improvement after project launch.

### From target to management system

A target is not an implementation plan. A credible programme connects a verified baseline to a quantified outcome, a set of causal actions, resources, ownership, risks, milestones and verification. The logic should be traceable: if the actions are delivered, why should the target move, and what evidence will show whether the causal assumption was correct?

The Plan–Do–Check–Act cycle is useful when applied concretely. **Plan** defines the environmental aspect, compliance duties, baseline, target and controls. **Do** provides competence, procedures, engineering changes and resources. **Check** monitors leading and lagging indicators, audits controls and investigates deviation. **Act** corrects the process, updates standards and scales what works. The cycle is weakened when “check” consists only of reporting an annual total after there is no time to intervene.

Leading indicators track whether the drivers of improvement are being implemented: percentage of leaks repaired within target, proportion of material ordered in optimal formats, or completion of process-control actions. Outcome indicators measure the environmental result: energy, solvent loss, waste or emissions. Guardrails ensure that performance is not achieved by transferring harm to quality, safety, water or another site.

### Airbus workplace case: reducing sealant waste

The baseline separates expired unopened cartridges, partially used cartridges, mixing losses and contaminated packaging. Root-cause analysis finds minimum order quantities, short shelf life after issue, work-order changes and cartridge sizes that exceed typical demand. The plan combines supplier discussion, kitting, cold-storage control, smaller formats, digital expiry alerts and technician feedback.

The leading indicators are percentage of kits matched to scheduled work, material issued within remaining shelf-life standard and adoption of smaller cartridges. Outcomes are kilograms purchased, kilograms becoming hazardous waste and waste per completed operation. First-pass yield and late work orders are guardrails. Finance verifies avoided purchasing; Environment verifies waste records; Quality approves process changes; Production owns daily execution.

### Governance and change control

Each action has an accountable owner and evidence required for closure. A project steering group resolves cross-functional barriers, but it does not replace operational ownership. Benefits are not annualised from one successful week. The pilot must cover representative products and shifts, and the saving must be corrected for activity. Standard work, training and process documentation are updated before the change is considered sustained.

### Final application

Create a mini-charter for one environmental issue with: problem statement, boundary, baseline confidence, 12–24 month target, three causal actions, one leading indicator per action, outcome KPI, guardrail, owner, resources, validation method and review frequency. Add a stop rule describing when adverse quality, safety or environmental evidence pauses the project.

KEY TAKEAWAY: Professional sustainability is ordinary management discipline applied to environmental outcomes—clear ownership, controlled processes, timely evidence and corrective action.
    `,
  ]),

  ...entries(M2, [
    `
## Extended learning unit: CO2, fuel and cumulative warming

### Learning objectives

- Relate aviation fuel burn to tank-to-wake CO2 and distinguish it from life-cycle emissions.
- Explain why cumulative CO2, not only annual efficiency, matters for climate stabilisation.
- Evaluate a fuel-saving claim using scope, baseline and deployment evidence.

### Carbon accounting begins with a physical relationship

Combustion converts most of the carbon in jet fuel into carbon dioxide. Aviation inventories commonly use an emission factor of approximately **3.16 kg CO2 per kilogram of fuel** for conventional jet fuel. The CO2 mass is greater than the fuel mass because oxygen from the atmosphere becomes part of the CO2 molecule. The precise factor and methodology must follow the applicable reporting system.

Tank-to-wake emissions cover combustion in the aircraft. Well-to-tank emissions include extraction or feedstock production, processing and transport of the fuel. Well-to-wake combines both. A flight using SAF can have similar tank-to-wake CO2 to fossil jet fuel because biogenic carbon is still released at combustion, while delivering a lower life-cycle result if the certified production pathway and feedstock meet sustainability requirements. Describing SAF as “zero emission at the engine” is therefore incorrect.

CO2 has a long atmospheric lifetime and warming depends strongly on cumulative emissions. A one-off tonne of CO2 cannot be treated as though it disappears at the end of the reporting year. This makes near-term reductions valuable: a future technology does not retroactively remove emissions produced while waiting for deployment.

### Efficiency versus absolute emissions

Fuel per passenger-kilometre can improve through better aircraft, load factor and operations. Absolute emissions can nevertheless rise if traffic grows faster. Suppose fuel intensity falls 15% while activity rises 25%. The new fuel total is 0.85 × 1.25 = 1.0625, or 6.25% above the baseline. Both statements—improved efficiency and higher total fuel—are true and should be reported together.

Different activity metrics answer different questions. Revenue passenger-kilometres include paying passengers and distance. Available seat-kilometres represent offered capacity. Tonne-kilometres can combine passengers and cargo. Metrics must not be switched between baseline and reporting years to improve the apparent outcome.

### Aerospace case: fleet modification claim

A modification is predicted to reduce cruise fuel 0.7% on applicable missions. Engineering provides model results; programme teams provide installation dates; operations data identifies actual flight hours. In year one, only 35% of eligible aircraft-months contain the modification. Claiming 0.7% against total fleet fuel would materially overstate the saving.

The evaluation builds a counterfactual: fuel expected without the modification under comparable mission, payload and weather conditions. It separates modelled, installed and verified savings. Confidence intervals reflect performance-model error and operational variability. Maintenance effects and added component mass are included where material.

### Calculation lab

A fleet burns 420,000 tonnes of fuel annually. A measure applies to 60% of that fuel and delivers a verified 0.5% saving. Fuel saved is 420,000 × 0.60 × 0.005 = 1,260 tonnes. Tank-to-wake CO2 avoided is approximately 3,982 tonnes using 3.16. Now test a lower effectiveness of 0.3% and delayed deployment covering only 40%. The range is more decision-useful than a single optimistic number.

WATCH OUT: A relative efficiency percentage is incomplete without the activity base, deployment rate, boundary, confidence and absolute consequence.
    `,
    `
## Extended learning unit: the science of aviation non-CO2 effects

### Learning objectives

- Describe the main causal chains from aircraft emissions to non-CO2 climate effects.
- Explain why altitude, location, weather and time make effects highly variable.
- Interpret climate metrics without using a universal multiplier as if it were a measurement.

### Multiple mechanisms, different timescales

Aircraft emit nitrogen oxides, water vapour, soot, sulphur compounds and other species. At cruise altitude these interact with atmospheric chemistry and clouds. Nitrogen oxides generally increase ozone over shorter timescales, creating warming, and reduce methane over longer timescales, creating cooling; additional effects influence the net response. Water vapour can contribute to warming, especially when emitted in the stratosphere. Soot and other particles affect the number and properties of ice crystals in contrails.

Contrail cirrus is produced when line-shaped contrails persist and spread in ice-supersaturated air. Its effect is short-lived compared with CO2, but short-lived does not mean unimportant. The magnitude and sign of an individual contrail's net radiative effect depend on background clouds, solar radiation, surface temperature and time of day. Many contrails have small impact while a much smaller subset may contribute disproportionately to total warming estimates.

The causal chain must remain explicit: **engine operating condition → emitted species → atmospheric transformation → radiative forcing → temperature response**. Evidence may be strong at one link and modelled at another. A measured reduction in soot does not by itself prove a quantified flight-level temperature benefit.

### Comparing CO2 and non-CO2

CO2 and short-lived effects cannot be combined without selecting a metric and time horizon. Effective radiative forcing, global warming potential and global temperature-change potential answer different questions. A metric designed to compare integrated forcing over 100 years may value an intervention differently from a metric focused on near-term temperature. The choice should be governed by the decision objective, not selected after results are known.

EASA's environmental reporting stresses that aviation's climate impact includes CO2 and non-CO2 effects, while scientific uncertainty remains significant. The EU non-CO2 monitoring, reporting and verification framework has applied from 1 January 2025 to create better evidence. Monitoring is not equivalent to applying a regulatory multiplier or proving mitigation.

### Engine and fuel case

A low-aromatic fuel blend reduces soot measured behind an engine. This is a valuable physical result. To estimate climate benefit, researchers then model ice-crystal number, contrail optical properties, atmospheric persistence and radiation. An honest communication separates: fuel composition was measured; soot response was observed; contrail response was inferred or observed under specified conditions; climate response was modelled. Each result has its own uncertainty.

### Interpretation exercise

Two routes burn the same fuel. Route A crosses ice-supersaturated regions at night; Route B does not. Their CO2 emissions are nearly equal, but modelled contrail impact differs. List the data required before recommending a route change: meteorological forecast, forecast confidence, aircraft performance, added fuel, airspace availability, safety constraints and post-flight verification. Then state which effects are measured and which are predictions.

### Evidence standard

- Never apply one generic “non-CO2 factor” to claim a precise flight result.
- State metric and time horizon when effects are aggregated.
- Keep warming and cooling components visible.
- Report uncertainty and model version.
- Distinguish research evidence from an operationally verified intervention.

KEY TAKEAWAY: Non-CO2 literacy means understanding the chain and its uncertainty, not memorising one multiplier.
    `,
    `
## Extended learning unit: contrail formation and mitigation

### Learning objectives

- Explain the conditions required for contrail formation and persistence.
- Design an operational trial that compares avoided contrail impact with additional CO2.
- Identify forecast, safety and network constraints before scale-up.

### Formation is necessary; persistence drives relevance

Hot, moist engine exhaust mixes with very cold ambient air. Under conditions described by the Schmidt–Appleman criterion, the mixture can become saturated and form ice crystals around emitted or ambient particles. A visible contrail may evaporate quickly in dry air. Persistent contrails require ice-supersaturated regions where crystals can survive and grow. These regions can be thin, irregular and difficult to forecast accurately at cruise altitude.

Contrail climate effect depends on more than persistence. Optical depth, lifetime, spreading, background cloud and solar conditions influence the radiation balance. At night there is no reflected sunlight to offset trapped outgoing infrared radiation, so warming potential can be different. Daytime contrails can also warm overall; no simple “day cools, night warms” rule is reliable for operational decisions.

### Mitigation options

Tactical mitigation may change altitude or lateral path to avoid a high-impact region. Strategic mitigation includes improved weather prediction, fuel composition and engine technology. A small altitude change can avoid a forecast region, but it may increase fuel burn, interact with turbulence, weather or restricted airspace, and reduce air-traffic capacity. The decision must compare avoided short-lived effect with added long-lived CO2 under a stated metric.

### Trial design

Define an eligible flight population and a climate-impact threshold before seeing individual results. Generate a baseline trajectory plus feasible alternatives. Log predicted contrail energy forcing, fuel penalty, flight time, operational constraints and dispatcher decision. After flight, recompute with updated meteorology and compare with satellite or other observations where feasible. Include control flights so forecast skill and natural variability can be evaluated.

A trial should report false positives—flights rerouted when a high-impact contrail probably would not have occurred—and false negatives—high-impact events not predicted. Both affect net benefit. Seasonal and regional coverage is necessary before extrapolating annual savings.

### Worked operational decision

Baseline fuel is 7,500 kg. Alternative A adds 30 kg and is predicted to avoid 80% of contrail impact; Alternative B adds 10 kg and avoids 45%. The CO2 penalties are about 95 kg and 32 kg respectively. The climate tool compares these with predicted avoided effects and uncertainty. If Alternative A's forecast confidence is low, B may offer a more robust result even though its central benefit is smaller.

### Scale-up checklist

- acceptable forecast skill across seasons and routes;
- positive net climate result under conservative assumptions;
- aircraft-performance and safety limits embedded in the tool;
- dispatcher and crew authority protected;
- air-traffic workload and capacity assessed;
- post-flight evidence and model drift monitored;
- claims limited to verified operational coverage.

REFLECTION: A trial reports a large modelled benefit but only on 20 clear-sky winter flights. What additional evidence is needed before claiming an annual network benefit?
    `,
    `
## Extended learning unit: noise and local air quality

### Learning objectives

- Separate emissions or sound at source from human exposure and health impact.
- Interpret common aviation noise and air-quality evidence without oversimplification.
- Evaluate measures that may redistribute impact among communities.

### Source, pathway and receptor

Local environmental impact occurs through a chain. The **source** emits a pollutant or sound; the **pathway** disperses or propagates it; the **receptor** is the person, habitat or asset exposed. Reducing source emissions usually helps, but impact also depends on location, meteorology, topography, buildings, time and population vulnerability.

Airport-related air pollutants can include nitrogen oxides, particulate matter, carbon monoxide, sulphur oxides and volatile organic compounds. Sources include aircraft during the landing-and-take-off cycle, auxiliary power units, ground-support equipment, heating plant and road traffic. Ambient monitors measure the combined concentration from airport and non-airport sources. Dispersion modelling, activity inventories and source apportionment are needed to attribute contribution responsibly.

Noise is similarly multidimensional. A maximum level describes one event; exposure metrics combine event level, number and time. Day-evening-night indicators apply greater weighting to sensitive periods. Average contours are useful for planning but can hide event distribution and respite. Community response is affected by sleep disturbance, predictability, trust and perceived fairness as well as acoustic energy.

### Aircraft and airport measures

Quieter aircraft technology, continuous descent, reduced-thrust procedures, preferential runways, ground-power use and land-use planning can reduce impact. Each has operating constraints. A procedure that lowers noise for one area may shift it to another. A longer ground track may reduce population exposure but increase fuel. A steep approach requires aircraft capability, procedure design, crew training and safety assessment.

### Integrated case

An airport replaces diesel ground-support equipment with electric units and installs fixed electrical ground power. The evaluation measures diesel displaced, electricity used at chargers, APU minutes, charger availability, NOx and particle reductions, and changes in ramp noise. It also checks where electricity is generated for climate reporting. Local air-quality benefit is not dismissed because upstream electricity emissions exist; the two occur in different impact categories and locations and should both be reported.

### Community decision lab

Procedure A reduces the number of residents inside a high-noise contour by 8,000 but increases moderate exposure for 3,000 residents previously experiencing little aircraft noise. Procedure B delivers a smaller total reduction but preserves predictable respite periods. A professional appraisal shows distribution, time of day, uncertainty, safety and consultation evidence. It does not call the average winner automatically “best for the community.”

### Monitoring framework

- source activity: movements, engine mode, APU and ground-equipment hours;
- pathway: meteorology, flight tracks and dispersion or noise models;
- exposure: concentrations, contours, event counts and night periods;
- response: health evidence, complaints and structured engagement;
- equity: which communities gain, lose or receive respite;
- verification: before-and-after results against a comparable baseline.

WATCH OUT: Complaint counts alone are not a direct measure of exposure, but treating them as irrelevant discards important evidence about events, trust and communication.
    `,
    `
## Extended learning unit: climate decisions under uncertainty

### Learning objectives

- Make a robust aviation-climate decision when evidence is incomplete.
- Select pilot, monitoring and stop rules proportionate to risk.
- Communicate confidence without treating uncertainty as ignorance.

### Three types of decision

Some measures are **no-regret**: they reduce fuel and CO2 with established evidence while maintaining safety, such as correcting a verified performance loss. Others are **conditional**: they are beneficial only under certain energy, mission or atmospheric conditions. A third group is **option-building**: research, demonstrators and infrastructure planning that preserve future choices without claiming current fleet-scale savings.

The evidence threshold should match the claim and consequence. A reversible software trial with operational safeguards can proceed under uncertainty more readily than a large irreversible infrastructure investment. A public quantitative claim requires stronger evidence than an internal research hypothesis. This proportional approach avoids both paralysis and reckless certainty.

### Robust decision-making

Instead of optimising for one forecast, test the option across plausible scenarios. Identify vulnerabilities: under what fuel price, electricity intensity, traffic growth, forecast error or technology delay does the choice fail? Prefer actions that perform acceptably across several futures or that can adapt when a trigger is reached.

Bayesian thinking can be used informally: begin with prior evidence, conduct a trial, and update confidence according to the strength and representativeness of results. A successful demonstration on one route increases confidence but does not prove global performance. Document what has been learned and what remains outside the trial domain.

### Case: climate-optimised routing tool

A prototype predicts contrail hotspots and proposes small altitude changes. The implementation team defines hard operational constraints, a minimum predicted benefit, a maximum fuel penalty and a dispatcher override. It starts on routes with good forecast coverage. Post-flight analysis compares predictions with updated weather and observations. If forecast performance falls below threshold for three consecutive review periods, recommendations pause while the model is investigated.

Results are reported in categories: flights screened, alternatives offered, alternatives accepted, modelled benefit, verified meteorological performance and additional fuel. The tool's reach is not confused with achieved climate benefit.

### Decision worksheet

For any proposed measure, document:

1. decision and claim to be supported;
2. known evidence and its domain;
3. critical uncertainties and potential downside;
4. reversible pilot or staged commitment;
5. safety, quality and environmental guardrails;
6. success, stop and scale-up criteria;
7. data owner and independent reviewer;
8. communication wording for measured versus modelled results.

### Final scenario

Measure X has a central estimate of 10,000 tonnes CO2-equivalent benefit, with a range from −2,000 to 25,000 due to weather-model uncertainty. Measure Y saves 3,500 tonnes CO2 with narrow uncertainty and lower cost. The answer depends on portfolio role: Y may be deployed now; X may continue as a controlled learning programme. Presenting both as competing certain totals would destroy the information needed for management.

KEY TAKEAWAY: Uncertainty is managed through staged commitment, measurement and adaptation—not through either false precision or inaction.
    `,
  ]),

  ...entries(M3, [
    `
## Extended learning unit: what SAF can and cannot do

### Learning objectives

- Define sustainable aviation fuel in technical rather than promotional terms.
- Distinguish drop-in compatibility, feedstock sustainability and life-cycle performance.
- Identify the evidence required before making a SAF emissions claim.

### A fuel category, not one product

Sustainable aviation fuel, or SAF, is a collective term for aviation fuels produced from eligible non-fossil or recycled-carbon resources through approved pathways and meeting applicable sustainability criteria. Different batches can use different feedstocks, technologies, energy sources and logistics. Their life-cycle greenhouse-gas values therefore vary. “SAF” alone is not a complete environmental specification.

Most SAF used today is **drop-in** fuel. After production and blending according to an approved specification, it is certified as conventional jet fuel and can use existing aircraft and airport systems within defined limits. Drop-in does not mean that neat synthetic blending components are automatically suitable for unrestricted aircraft use. Fuel properties such as energy density, freezing point, thermal stability, aromatics, lubricity and material compatibility remain safety-critical.

At combustion, SAF releases CO2. The climate advantage is assessed across the life cycle because much of the carbon was recently taken from the atmosphere through biomass growth or captured as part of a synthetic pathway, rather than extracted as additional fossil carbon. The result must include feedstock production or collection, processing, hydrogen and electricity, transport, conversion yield and co-products. Land-use change can be material for some biological feedstocks.

### Sustainability is more than carbon

Feedstock selection can affect biodiversity, soil, water, food systems, labour and land rights. Waste and residue labels require verification: a material treated as waste in one jurisdiction may have an existing productive use. Diverting it can create indirect demand elsewhere. Certification provides a controlled framework, but procurement teams must still understand scheme scope, batch documentation and the claim being made.

### Airline claim case

An airline buys one million litres of a blended product containing 20% SAF. The environmental attribute applies to the SAF fraction, not the entire delivery. The claim uses certified mass or energy quantity, pathway-specific life-cycle intensity and the relevant fossil comparator. It states whether the SAF was physically delivered, allocated through a mass-balance system or acquired through book-and-claim. It does not describe the flight as zero-carbon.

If the SAF component delivers a certified 75% life-cycle reduction, that percentage is applied to the eligible component and system boundary. A simplistic claim of “75% lower emissions for the flight” would ignore the 80% fossil fraction, other flight emissions and non-CO2 effects.

### Evidence checklist

- approved fuel pathway and blend status;
- batch quantity and sustainability certificate;
- feedstock category and origin;
- life-cycle intensity and calculation method;
- chain-of-custody model and ownership of attributes;
- fossil comparator and reporting programme;
- treatment of tank-to-wake CO2 and non-CO2 effects;
- confirmation that the same attribute is not claimed twice.

AVIATION CASE: SAF can also change sulphur, aromatic and soot emissions, which may influence local air quality and contrails. Those potential benefits require specific fuel composition and operational evidence; they should not be assumed for every batch.

KEY TAKEAWAY: A credible SAF statement identifies what fuel, how much, which pathway, which life-cycle value, which chain of custody and which boundary.
    `,
    `
## Extended learning unit: pathways, feedstocks and conversion

### Learning objectives

- Compare major SAF pathways without assuming one universal ranking.
- Explain how feedstock, hydrogen, electricity and conversion yield drive performance.
- Match technology pathways to scale, maturity and resource constraints.

### Major pathway families

**HEFA** converts oils and fats through hydrogen treatment. It is commercially mature and currently important, but sustainable lipid feedstocks are limited and already demanded by other sectors. Performance depends on feedstock type, hydrogen source and co-product treatment.

**Fischer–Tropsch** pathways convert a synthesis gas made from biomass, waste or captured carbon and hydrogen into hydrocarbons. Gasification and cleaning must handle variable feedstock. Municipal waste routes require careful definition of the fossil and biogenic fractions and the counterfactual treatment of that waste.

**Alcohol-to-jet** converts alcohols such as ethanol or isobutanol into jet-range hydrocarbons. The upstream alcohol may come from sugars, starches, residues, cellulosic material or other routes. Agricultural practices, land use and process energy can dominate the result.

**Power-to-liquid**, also called e-fuel or synthetic aviation fuel, combines renewable hydrogen with captured carbon to make hydrocarbons. Its long-term resource base can be large, but it needs substantial additional low-carbon electricity, electrolysers, CO2 supply and conversion capacity. Using grid electricity with high carbon intensity can erode or eliminate the anticipated climate benefit.

### Resource efficiency matters

Conversion processes lose energy. Direct electrification is generally more efficient where technically possible, while aviation's energy-density and range requirements make liquid fuel difficult to replace for many missions. This gives scarce SAF feedstocks, low-emissions hydrogen and synthetic fuels a strategic value. An aviation pathway should therefore be evaluated within the wider energy system, not only at the refinery gate.

Hydrogen demand links SAF scale-up to the hydrogen economy. For e-fuels, both hydrogen and captured carbon must meet environmental criteria. Biogenic CO2, direct-air-captured CO2 and fossil point-source CO2 have different implications. Carbon recycled from a fossil source may delay release but does not necessarily create a closed atmospheric cycle.

### Feedstock screening case

A proposed facility plans to use used cooking oil. Procurement verifies collection geography, historical volumes, existing uses, traceability to origin and fraud controls. A volume promise greater than plausible regional collection is a red flag. The team tests an alternative feedstock mix and evaluates whether indirect displacement could increase virgin oil demand.

For a power-to-liquid proposal, the screen quantifies annual electricity, electrolyser load factor, electricity additionality, water, hydrogen storage, CO2 source, conversion efficiency and grid connection. A renewable certificate alone may not demonstrate that new generation is available in the same time and location as consumption.

### Technology comparison exercise

Create a table for HEFA, Fischer–Tropsch, alcohol-to-jet and power-to-liquid with: eligible feedstocks, technology maturity, main resource constraint, hydrogen need, electricity sensitivity, likely co-products, infrastructure fit and key sustainability risk. Do not assign one ranking. Instead, write the conditions under which each pathway is attractive.

### Scale-up questions

- Can feedstock supply grow without degrading sustainability?
- Are process energy and hydrogen low-carbon in practice?
- What fraction of output is jet fuel rather than other products?
- What certification and blending steps remain?
- Which competing sectors need the same resources?
- Are commercial volume claims backed by final investment decisions and construction progress?

WATCH OUT: Announced capacity is not delivered fuel. Roadmaps should distinguish concept, contracted volume, final investment decision, construction, commissioning and certified production.
    `,
    `
## Extended learning unit: life-cycle accounting and sustainability criteria

### Learning objectives

- Build a well-to-wake SAF calculation at screening level.
- Identify allocation, land-use and counterfactual assumptions that affect the result.
- Interpret certification values without treating them as universal pathway constants.

### The life-cycle equation

A SAF life-cycle inventory includes emissions from feedstock cultivation or collection, land-use change where applicable, transport, conversion, hydrogen, electricity, fuel distribution and combustion accounting. Credits or allocations may be applied for co-products according to the selected methodology. The result is normally expressed in grams of CO2-equivalent per megajoule so fuels with different energy content can be compared on an energy basis.

The counterfactual asks what would have happened without the SAF project. If a waste would otherwise decompose and emit methane, avoided disposal may influence the result under a defined methodology. If it already had a market, diverting it can trigger substitution. Counterfactuals are uncertain and must not be chosen only because they maximise the claimed saving.

Direct land-use change occurs when land is converted for feedstock production. Indirect land-use change describes market-mediated effects elsewhere. Both are difficult but potentially important for crop-based pathways. Strong sustainability criteria also protect high-carbon-stock land and biodiversity and include social or governance requirements according to the scheme.

### Worked calculation

A certified SAF batch has a life-cycle intensity of 22 g CO2e/MJ. The applicable fossil comparator is 89 g CO2e/MJ. The relative reduction is (89 − 22) / 89, or approximately 75.3%. If the batch contains 10 million MJ, the life-cycle saving against that comparator is 670 tonnes CO2e. The calculation does not mean that 670 tonnes were captured at the aircraft engine, nor does it include a quantified contrail benefit.

Now test an alternative electricity supply that raises SAF intensity to 38 g/MJ. The reduction becomes about 57.3%, and the saving becomes 510 tonnes. Energy sourcing changes the outcome materially even though the pathway name is unchanged.

### Allocation and co-products

A plant may produce jet fuel, diesel-range fuel, naphtha, electricity and other products. Energy allocation, economic allocation and system expansion distribute impacts differently. Certification methods prescribe rules; analysts should not substitute another rule without explanation. For procurement comparison, examine whether suppliers' figures use the same methodology and comparator.

### Assurance case

A purchaser receives a sustainability certificate, invoice and life-cycle value. Assurance reconciles certificate quantity with fuel quantity, checks certificate validity and scheme approval, confirms chain of custody, prevents duplicate use of attributes, locks the factor used in reporting and retains evidence. Marketing text is reviewed against the actual system boundary.

### Applied task

For a hypothetical batch, draw the chain from feedstock origin to claim. At each stage list document, quantity, actor and risk of loss or double counting. Then write two statements: one technically defensible and one misleading. Explain why the second fails.

KEY TAKEAWAY: The value of SAF is batch- and method-specific. Certification makes the evidence traceable; it does not make all SAF environmentally identical.
    `,
    `
## Extended learning unit: fuel certification, traceability and book-and-claim

### Learning objectives

- Separate technical fuel certification from sustainability certification.
- Explain physical segregation, mass balance and book-and-claim.
- Design controls that prevent double issuance and double claiming.

### Two assurance systems

Technical certification demonstrates that fuel meets aviation safety and performance requirements. ASTM D7566 contains approved synthetic blending components and associated limits; after blending and recertification, compliant fuel can be treated as conventional turbine fuel under the applicable specification. Sustainability certification addresses feedstock, life-cycle methodology, chain of custody and other environmental criteria. Passing one system does not automatically satisfy the other.

Fuel supply chains commingle molecules. Environmental accounting therefore relies on controlled attributes. Under **physical segregation**, eligible material remains separate. Under **mass balance**, eligible and conventional material may mix while administrative records ensure that allocated claims do not exceed eligible input. **Book-and-claim** can separate the environmental attribute from physical delivery, allowing a buyer in a location without SAF supply to fund eligible fuel use elsewhere.

Book-and-claim can support market scale and reduce inefficient transport, but integrity depends on registry design, eligibility, additionality rules, unique identifiers, retirement and interoperability. The physical user, fuel producer, airline, corporate customer and logistics provider must not all claim the same reduction.

### Chain-of-custody case

A producer issues a certificate for 500 tonnes of SAF. The fuel is blended, delivered and its attribute transferred through a registry. Quantity must be converted consistently between mass, volume and energy, accounting for density and blend fraction. When a buyer claims the attribute, the unit is retired. Audit evidence links production batch, sustainability certificate, transaction, delivery or allocation and retirement.

If 500 tonnes of neat component become a 20% blend, it does not create 2,500 tonnes of SAF attribute. It creates 2,500 tonnes of blended fuel containing 500 tonnes of SAF. Language must preserve that distinction.

### Controls for a credible registry

- one unique identifier per issued unit;
- verified link to eligible production and certificate;
- clear ownership at each transfer;
- no issuance above verified eligible quantity;
- transparent conversion and loss rules;
- public or auditable retirement status;
- claim boundary and reporting programme recorded;
- correction process for errors or revoked certificates.

### Claim review exercise

Statement: “Our employees flew on 100% sustainable fuel because the company purchased SAF certificates.” Rewrite it. A defensible version might state that the company funded a specified quantity of certified SAF through a book-and-claim system and claims the associated life-cycle reduction under the named methodology; the physical aircraft fuel mix may differ. Add quantity, reporting period and assurance status.

### Procurement decision

Compare two offers with the same headline price premium. Offer A provides batch-level certification, registry retirement and a pathway-specific intensity. Offer B provides only an invoice and generic “up to 80%” language. The environmental attributes are not equivalent. Commercial teams should make evidence quality part of the specification and acceptance criteria.

WATCH OUT: “Book-and-claim” is an accounting architecture, not a licence for vague claims. Its credibility depends on conservative rules and exclusive ownership of the attribute.
    `,
    `
## Extended learning unit: scaling SAF under ReFuelEU Aviation

### Learning objectives

- Describe the role of mandates, supply investment and demand in SAF scale-up.
- Interpret ReFuelEU targets without confusing obligation, availability and achieved reduction.
- Build a supply roadmap that distinguishes firm volume from aspiration.

### The European scale-up signal

ReFuelEU Aviation establishes increasing minimum SAF shares supplied at covered Union airports: 2% from 2025, 6% from 2030, 20% from 2035 and rising to 70% by 2050, with a sub-mandate for synthetic aviation fuels beginning at 1.2% in 2030 and increasing over time. The legal text and implementing guidance govern exact scope, averaging, reporting and compliance; training figures should always be checked against the current official source.

The regulation also addresses fuel tankering by requiring aircraft operators to uplift a defined share of yearly aviation fuel requirements at covered airports, subject to rules and exceptions. Tankering can increase aircraft mass and fuel burn when fuel is carried to avoid purchasing at another airport. The policy therefore links fuel supply and operational behaviour.

Mandates create demand certainty, but they do not by themselves build plants. Scale requires feedstock, renewable electricity, hydrogen, finance, engineering, permitting, certification, logistics, blending and long-term buyers. First-of-a-kind projects face construction and performance risk. A credible roadmap uses project-stage probability rather than adding every public announcement.

### Supply-funnel case

An airline has memoranda covering 600,000 tonnes, conditional offtake contracts covering 250,000 tonnes, and firm expected deliveries of 80,000 tonnes for the next reporting year. Its plan should not show 600,000 tonnes as secured. The funnel records project stage, pathway, start date, supplier concentration, certification, geography, price formula and contingency.

Scenario analysis tests delay in one large facility, feedstock price shock and lower-than-planned conversion yield. Diversification can reduce risk but may raise transaction and assurance complexity. Efficiency measures reduce the absolute SAF volume and cost required for a given share, showing why fleet and operational action complement fuel policy.

### Economics and the incremental fuel cost

SAF generally costs more than fossil jet fuel because eligible feedstocks, electricity with sufficiently low life-cycle emissions and production assets are scarce or immature. The incremental cost can be shared through regulation, long-term offtake, incentives, corporate demand and financing. Cost analysis should use energy-equivalent quantity, include logistics and certification, and keep price separate from the certified life-cycle greenhouse-gas result.

### Roadmap exercise

For a notional 2030 demand of 500,000 tonnes of fuel at covered airports, a 6% share implies 30,000 tonnes of SAF before detailed regulatory calculations. Build a portfolio with central, delayed-project and high-demand scenarios. Add a separate synthetic-fuel requirement, contract coverage, delivery confidence and evidence owner. Then calculate how a 10% fuel-efficiency improvement changes absolute SAF and fossil volumes while the percentage obligation remains.

### Evidence base

- [European Commission: ReFuelEU Aviation](https://transport.ec.europa.eu/transport-modes/air/environment/refueleu-aviation_en)
- [ICAO: CORSIA eligible fuels](https://www.icao.int/CORSIA/corsia-eligible-fuels)

KEY TAKEAWAY: Scale is not one percentage. It is a managed portfolio of physical projects, certified resources, contracts, infrastructure and demand reduction.
    `,
  ]),

  ...entries(M4, [
    `
## Extended learning unit: hydrogen properties and aircraft integration

### Learning objectives

- Explain why hydrogen's mass advantage becomes a volume and integration challenge.
- Identify cryogenic storage, thermal and centre-of-gravity implications.
- Compare aircraft concepts on mission and system performance rather than fuel mass alone.

### Energy by mass versus energy by volume

Hydrogen contains roughly three times the lower-heating-value energy per kilogram of conventional jet fuel. However, even as a cryogenic liquid near −253°C, it has far lower energy per unit volume. An aircraft can need several times the tank volume for equivalent fuel energy. Tanks must withstand thermal cycling, limit heat leak and manage pressure; they cannot simply reproduce thin conformal wing tanks used for kerosene.

Cryogenic tanks tend toward cylindrical or spherical shapes with insulation and structural support. Their installation affects fuselage volume, aerodynamics, payload, centre of gravity and emergency arrangements. Usable system energy must include tank, pumps, pipes, valves and unusable fuel—not only hydrogen mass. Boil-off and pressure management vary with turnaround, ground dwell and mission.

Hydrogen molecules are small and can leak through systems that retain other gases. Hydrogen has a wide flammability range and low ignition energy. Safety design therefore emphasises leak prevention, detection, ventilation, ignition control, separation and safe venting. Hazard is not managed by claiming hydrogen is simply “more” or “less” dangerous than kerosene; the hazard profile is different and requires its own architecture.

### Aircraft integration case

For a single-aisle mission, designers compare a rear-fuselage tank concept, a blended-body concept and a shorter-range conventional layout. The rear tank reduces passenger or cargo volume and shifts centre of gravity as fuel is used. A wider body may integrate volume more efficiently but changes aerodynamic and airport compatibility assumptions. The best architecture depends on range, payload, turnaround, certification and infrastructure.

### Mission-energy calculation

Suppose a mission needs 100 GJ of usable fuel energy. At about 43 MJ/kg, the ideal kerosene mass is roughly 2,326 kg. At about 120 MJ/kg, ideal hydrogen mass is roughly 833 kg. That comparison is incomplete. Add storage-system mass, propulsion efficiency, reserve policy and required tank volume. A heavier tank system can offset part of the fuel-mass benefit, while different propulsion efficiency can change required energy.

### Integration review

- mission range and reserve requirement;
- tank volume, mass and insulation;
- centre-of-gravity evolution;
- aerodynamic and payload effects;
- refuelling rate and turnaround;
- thermal management and venting;
- inspection, maintenance and crashworthiness;
- airport separation and emergency response.

### Applied task

Draw the energy pathway from electricity or natural gas to hydrogen production, liquefaction, transport, airport storage, aircraft tank and useful propulsive power. At each step identify loss, equipment, safety control and environmental data. This prevents assessment from beginning only at the aircraft tank.

WATCH OUT: Hydrogen's high gravimetric energy is real, but quoting it alone hides the central aircraft challenge: delivering safe, efficient energy at system and mission level.
    `,
    `
## Extended learning unit: combustion, fuel cells and hybrid architectures

### Learning objectives

- Compare hydrogen combustion and fuel-cell propulsion across emissions and integration.
- Explain why “zero CO2 in flight” is not the same as zero climate impact.
- Identify mission niches and technology gates for each architecture.

### Hydrogen combustion

A gas turbine can be adapted to burn hydrogen, retaining parts of familiar propulsion architecture and high specific power. Combustion produces water vapour and no fuel-derived CO2, but high-temperature flames can produce nitrogen oxides. Combustor design, staging, mixing and operating condition are critical to controlling flame speed, flashback and NOx. Water emissions at altitude and potential contrail effects require climate assessment.

### Fuel-cell electric propulsion

Fuel cells convert hydrogen's chemical energy electrochemically into electricity, with water and heat as main outputs. Electric motors then drive propellers or fans. Fuel cells can offer high efficiency, particularly at partial load, but the system includes stacks, compressors, humidification or water management, power electronics, motors and cooling. Heat rejection can be a major aircraft integration challenge because the temperature at which heat is available affects radiator size.

Fuel-cell systems currently fit lower-power and shorter-range applications more readily than high-thrust large-aircraft missions. Hybrid concepts may combine fuel cells, batteries and turbines to match different phases of flight. Batteries can support transient power but add mass; architecture must be evaluated at mission level.

### Emissions comparison

Hydrogen combustion: no fuel carbon at the engine, potential NOx, substantial water, possible contrail implications. Fuel cell: no combustion NOx in the stack, water and heat, indirect emissions depending on hydrogen production and electricity. Both require a well-to-wake assessment. Neither should be labelled climate-neutral without specifying energy source and non-CO2 treatment.

### Technology case

A regional demonstrator uses a fuel-cell electric powertrain. Ground tests validate stack response and thermal management. Flight demonstration then tests altitude, vibration, redundancy and failure modes. The programme does not extrapolate directly to a long-haul aircraft; it identifies scalable components, mass and cooling limits, certification evidence and mission boundaries.

### Architecture decision matrix

Compare concepts using:

- required shaft or thrust power by flight phase;
- full system efficiency and mass;
- thermal-management area and drag;
- emissions by altitude;
- redundancy and failure response;
- maintainability and component life;
- hydrogen purity and supply requirements;
- airport and turnaround compatibility.

### Applied scenario

Concept A has 45% tank-to-shaft efficiency and a light turbine system. Concept B has 55% efficiency but adds 2 tonnes of fuel-cell and cooling equipment. For a short mission B's equipment mass may dominate; on a longer mission fuel savings may compensate, but tank volume and payload also change. Find the mission break-even rather than declaring one propulsion type universally superior.

KEY TAKEAWAY: Propulsion choice is a mission-system optimisation problem involving power, mass, heat, emissions, safety and infrastructure.
    `,
    `
## Extended learning unit: producing genuinely low-emission hydrogen

### Learning objectives

- Calculate how electricity intensity influences electrolytic hydrogen emissions.
- Compare production pathways using measured life-cycle data rather than colour labels.
- Evaluate additionality, temporal matching and infrastructure in a supply claim.

### Production pathways

Most hydrogen has historically been produced from fossil fuels. Steam methane reforming converts natural gas and releases CO2; upstream methane leakage adds climate impact. Carbon capture can reduce part of the process emissions, but actual capture rate, energy penalty, methane leakage, transport, storage durability and system boundary determine performance.

Electrolysis splits water using electricity. When powered by additional low-carbon electricity, it can deliver low life-cycle emissions. If it draws from a carbon-intensive grid, emissions can be high. “Green hydrogen” is therefore not a sufficient data point. The calculation needs electricity consumption per kilogram, hourly or contractual electricity source where required, equipment and water impacts, compression or liquefaction, and delivery.

### Worked electricity calculation

An electrolyser uses 52 kWh per kilogram of hydrogen. With electricity at 40 g CO2e/kWh, electricity contributes 2.08 kg CO2e per kilogram of hydrogen before plant, water, compression and transport. At 300 g/kWh, the contribution is 15.6 kg. The same electrolyser produces radically different results under different electricity supply.

Liquefaction requires significant additional energy. If 10 kWh/kg is assumed for a simplified screen, total electricity becomes 62 kWh/kg, giving 2.48 kg at 40 g/kWh or 18.6 kg at 300 g/kWh. Actual design values must replace illustrative assumptions.

### Renewable-electricity integrity

**Additionality** asks whether consumption supports new low-carbon generation rather than reallocating existing supply. **Temporal matching** asks whether generation and electrolyser operation align in time. **Geographical correlation** considers grid constraints. These criteria reduce the risk that a nominal contract leaves higher fossil generation elsewhere. Their precise legal application depends on jurisdiction and product category.

### Airport supply case

Option A produces hydrogen near abundant renewable power, liquefies it and transports it to the airport. Option B produces at the airport using grid and contracted renewable electricity. Compare electricity intensity, liquefaction, road or pipeline transport, storage losses, resilience, land, water and ability to verify supply. Local production is not automatically lower-carbon; remote production is not automatically inefficient.

### Procurement data sheet

- production technology and plant location;
- electricity consumption and source;
- natural-gas use and methane assumptions if applicable;
- carbon-capture rate and storage evidence;
- compression, liquefaction and delivery energy;
- water source and local scarcity;
- life-cycle intensity, methodology and verifier;
- volume, availability, price and contingency.

WATCH OUT: Colour labels simplify communication but can hide a wide range of actual emissions. Procurement should contract a verified performance threshold and evidence, not a colour.
    `,
    `
## Extended learning unit: airport infrastructure, operations and safety

### Learning objectives

- Map the hydrogen supply chain and interfaces at an airport.
- Apply hazard-based thinking to storage and refuelling concepts.
- Evaluate capacity, resilience and emergency response alongside aircraft readiness.

### An airport energy system

Hydrogen may arrive as gas, liquid or a carrier, or be produced on site. Each option requires transfer, storage, conditioning and quality control before aircraft refuelling. Liquid hydrogen systems need cryogenic tanks, insulated lines, pumps, vents and management of heat ingress. Refuelling flow must support turnaround time without unacceptable pressure, thermal or operational risk.

Demand is uneven. Morning departure waves can create high peak flow even if average daily consumption appears manageable. Infrastructure sizing therefore uses aircraft schedule, reserve inventory, delivery reliability, maintenance downtime and growth scenarios. A single-point failure can disrupt flight operations; resilience may require redundant equipment or alternative supply.

### Hazard management

A structured hazard analysis identifies loss of containment, ignition, overpressure, oxygen displacement, material compatibility and cryogenic exposure. Controls follow a hierarchy: inherently safer design and inventory minimisation; engineered containment, detection, ventilation and shutdown; procedures and competence; emergency response and personal protective equipment. Separation distances and zoning follow applicable standards and site-specific assessment.

Hydrogen flame may be difficult to see, and leaks can disperse rapidly upward outdoors while accumulating in poorly ventilated spaces. Sensors, ventilation paths and vent locations must reflect physical behaviour. Emergency services need detection capability, isolation knowledge and realistic exercises.

### Turnaround case

An airport plans ten hydrogen aircraft departures in a two-hour wave. Each requires 1.5 tonnes. The average across 24 hours is only 0.625 tonnes per hour, but peak delivery is 7.5 tonnes per hour. Designing to the daily average would fail operations. The concept assesses simultaneous connections, buffer storage, pump capacity, vehicle movements, exclusion zones and interaction with passenger, baggage and maintenance activity.

### Interface governance

Aircraft manufacturer, airport, fuel supplier, ground handler, operator, regulator and emergency services control different parts of the system. Interface documents define fuel quality, coupling, communication, bonding or grounding requirements, permissive logic, quantity measurement and responsibility during abnormal events. A safe component does not guarantee a safe interface.

### Readiness exercise

Create a bow-tie for “loss of liquid hydrogen during refuelling.” On the left list causes such as hose damage, incorrect connection, valve failure and vehicle movement. Define preventive barriers. On the right list consequences and mitigations: detection, automatic isolation, drainage or dispersion, ignition control, evacuation and emergency response. Assign an owner and test method to every barrier.

KEY TAKEAWAY: Aircraft readiness and airport readiness are separate but interdependent programmes. Commercial service requires both to mature together.
    `,
    `
## Extended learning unit: ZEROe as a technology and ecosystem programme

### Learning objectives

- Interpret a demonstrator programme through technology, certification and ecosystem gates.
- Distinguish a concept image, a validated subsystem and a service-ready aircraft.
- Explain how infrastructure and energy availability shape product decisions.

### Demonstrators create evidence

Future-aircraft programmes use ground rigs, iron birds, flying demonstrators and digital models to reduce uncertainty. A demonstrator may test a combustor, tank, fuel-cell system, cryogenic distribution or thermal-management architecture. Its purpose is to learn under representative conditions; it is not itself proof that every production, certification and economic requirement has been achieved.

Technology readiness levels are useful but incomplete. Manufacturing readiness, integration readiness, certification evidence, supply capacity, airport infrastructure and customer economics can mature at different speeds. A component may perform well in a laboratory yet remain constrained by repeatability, maintenance life or production rate.

### Gate structure

A robust programme uses evidence gates:

1. scientific and component feasibility;
2. subsystem performance in representative environment;
3. integrated power, thermal, tank and control behaviour;
4. aircraft-level safety architecture and mission performance;
5. certification means of compliance;
6. repeatable industrial system and supply chain;
7. airport and energy ecosystem readiness;
8. customer mission, economics and support model.

Passing one gate does not imply that later gates are solved. Management can continue option-building while being transparent about external dependencies.

### Ecosystem case

An aircraft architecture meets payload-range targets, but launch airports cannot yet commit to required liquid-hydrogen volume. The programme evaluates a limited network, staged infrastructure and alternative entry-into-service scenarios. Energy partners develop production and liquefaction; airports study safety and land; airlines test schedules and economics. The aircraft configuration may change because ecosystem constraints are design inputs, not post-design details.

### Employee decision lab

Imagine a test delivers 8% less subsystem efficiency than assumed but thermal performance is better. Do not label the programme success or failure. Update aircraft mission analysis, identify the requirement margin, test design options and state what evidence is needed at the next gate. Learning that invalidates an assumption early can be a valuable programme outcome.

### Communicating maturity

- **Concept:** a possible architecture under study.
- **Demonstrated:** performance observed in stated conditions.
- **Validated:** evidence meets defined representative requirements.
- **Certified:** authority has approved the product against requirements.
- **Industrialised:** repeatable production and support capability exists.
- **Service ready:** aircraft, operator, infrastructure and energy system are ready together.

### Evidence base

- [Airbus: pioneering sustainable aerospace](https://www.airbus.com/sites/g/files/jlcbta136/files/2025-04/2025_Airbus_Pioneering_sustainable_aerospace_publication.pdf)
- [Airbus sustainability approach](https://www.airbus.com/en/sustainability)

KEY TAKEAWAY: The value of ZEROe-type work is disciplined evidence creation across aircraft and ecosystem—not a date or image treated as a guarantee.
    `,
  ]),

  ...entries(M5, [
    `
## Extended learning unit: aircraft efficiency across the mission

### Learning objectives

- Connect aerodynamic, mass, propulsion and operational factors to mission fuel.
- Distinguish theoretical performance from savings delivered in service.
- Design a verification plan for an aircraft-efficiency intervention.

### Mission fuel is a system result

Aircraft fuel depends on required mission energy and the efficiency with which chemical energy becomes useful transport work. Aerodynamic drag, aircraft mass, propulsion efficiency, speed, altitude, weather, payload, trajectory and reserves interact. A measure that helps one flight phase may have little effect elsewhere or create a penalty in another condition.

Drag contains several components. Lift-induced drag is important at lower speed and higher lift; parasite drag grows strongly with speed and includes skin friction, form and interference drag. Contamination, surface steps, gaps, damaged seals and external configuration can degrade performance. Aircraft mass affects lift and induced drag and means more energy is carried throughout the mission. Engine deterioration changes fuel flow required for thrust.

Fuel saving from one kilogram of mass is not a universal constant. It varies by mission length, aircraft type, payload and operational pattern. Similarly, a winglet or aerodynamic modification must be evaluated across the missions actually flown, including added mass, maintenance and structural changes.

### Performance monitoring

In-service data must be normalised for weather, payload, route, aircraft state and operational decisions. A reference model predicts expected fuel or performance under comparable conditions. Statistical monitoring detects trends and distinguishes persistent degradation from noise. Model version, filters and excluded flights are part of the audit trail.

### Maintenance case

Analysis indicates a 0.4% excess fuel burn on a subset of aircraft associated with engine and airframe condition. Maintenance options include engine wash, rigging inspection, repair of external seals and cleaning. Each action has cost, downtime, water, chemicals and recurrence. The optimum intervention threshold maximises net benefit rather than demanding maintenance after every small deviation.

A controlled trial selects comparable aircraft, records pre-action performance, executes approved maintenance and monitors a post-action window. Savings are accepted only if the change exceeds model uncertainty and persists. The project reports aircraft treated, verified performance recovery and total fleet coverage separately.

### Worked calculation

An aircraft burns 4,800 tonnes of fuel annually. Monitoring shows a 0.35% recoverable penalty. Restoring it saves 16.8 tonnes of fuel and about 53 tonnes of tank-to-wake CO2. If the intervention itself consumes 4 tonnes CO2e in materials, energy and logistics, the simplified first-year net benefit is about 49 tonnes. Add recurrence and service life before making a multi-year claim.

### Verification plan

- performance hypothesis and physical mechanism;
- eligible aircraft and mission range;
- baseline and comparison model;
- weather, payload and route controls;
- maintenance action and approval status;
- post-action observation window;
- uncertainty and significance threshold;
- environmental costs of the intervention;
- rule for extrapolation to the fleet.

KEY TAKEAWAY: Efficiency is delivered when a physical improvement survives aircraft integration, operational variability and post-action verification.
    `,
    `
## Extended learning unit: flight planning, fuel policy and payload

### Learning objectives

- Explain the purposes of major fuel-planning components without undermining safety authority.
- Use planned-versus-actual data to find systematic inefficiency.
- Design incentives that improve planning quality rather than rewarding minimal uplift.

### Fuel carries safety margin and weight

Flight plans include taxi, trip, contingency, alternate, final reserve and additional fuel according to applicable rules and operational judgement. Each serves a purpose. Carrying unnecessary fuel can increase burn because fuel itself has mass, but pressure to reduce uplift can create serious safety and reporting risks. The objective is better information and system planning—not the smallest possible fuel figure.

Dispatchers and commanders must retain authority to respond to weather, technical condition, congestion, destination risk and uncertainty. Environmental programmes should explicitly protect that authority. Safety indicators, diversion outcomes, minimum-fuel reports and crew feedback are guardrails.

### Planned-versus-actual analysis

Segment data by route, aircraft, season, departure period and disruption state. Average error alone is inadequate: a model can be unbiased on average while frequently underpredicting extremes. Examine distribution, percentile and cause. Persistent overprediction of taxi time calls for an updated planning parameter; high random variability may require better surface predictability rather than a lower standard value.

Payload decisions also affect fuel. Tankering fuel to avoid price or supply constraints can increase mass and burn. Cargo and baggage planning, loading, centre of gravity and last-minute changes influence performance. Environmental analysis must not conflict with commercial or safety requirements and should target avoidable planning error.

### Route-group case

On 800 annual flights, taxi fuel is planned at 300 kg but actual median is 210 kg and the 90th percentile is 285 kg. A blanket cut to 210 kg would underprovide for many conditions. The team develops airport- and time-specific predictions, preserves exception logic and monitors forecast calibration. If the mean reduction in planned uplift is 50 kg and the estimated carry-cost saving is 2% of that mass, the direct saving is about 800 kg fuel annually. Use the operator's validated performance method for actual benefit.

### Incentive design

Bad target: “Reduce captain's discretionary fuel 15%.” Better target: “Improve planning-model calibration and reduce avoidable overprediction while maintaining reserve, diversion and safety outcomes.” Measure model error, prediction interval, cause codes, data availability and safety guardrails. Avoid league tables that discourage reporting or legitimate judgement.

### Applied task

Build a dashboard with planned and actual taxi, trip, holding and arrival fuel. Show median, 10th and 90th percentiles; separate normal and disrupted days. Add diversion, go-around, minimum-fuel and crew-feedback indicators. For one systematic bias, define the data or process change that could remove it and how performance will be checked after implementation.

WATCH OUT: Fuel-policy sustainability is achieved by reducing uncertainty and avoidable inefficiency, never by treating safety reserves as environmental waste.
    `,
    `
## Extended learning unit: airspace and trajectory efficiency

### Learning objectives

- Identify horizontal, vertical and time-based air-traffic inefficiencies.
- Evaluate a trajectory change at network rather than single-flight level.
- Separate necessary constraints from avoidable inefficiency.

### The trajectory has four dimensions

Horizontal efficiency concerns actual track compared with a relevant route reference. Vertical efficiency considers climb, cruise level, descent and level-offs. Time efficiency includes taxi, queue, holding and delay. Predictability influences the buffers airlines build into fuel and schedule. The shortest geometric route is not automatically the most efficient once weather, restricted airspace, sector capacity and traffic interactions are included.

Continuous climb and descent can reduce level flight at inefficient thrust settings, but procedure availability does not guarantee use. Runway configuration, traffic, noise, airspace and aircraft capability affect delivery. Free-route airspace can create more direct planning, while tactical conflict resolution may still add distance. Metrics should distinguish flight-planned and flown trajectories.

### Network effects

Optimising one flight can transfer delay or workload to others. A new route may reduce distance for one flow and create crossing conflicts in another. Network assessment models all affected flights, controller workload, sector capacity, delay propagation and resilience under weather or military-airspace scenarios.

### SESAR-style demonstration case

A cross-border trajectory concept coordinates airline operations centres, airports, air-navigation service providers and network management. The reference and solution days are matched for traffic and weather. KPIs include fuel by phase, track distance, vertical deviation, taxi and holding, predictability and controller workload. Results are reported for the demonstration domain; annual European benefit is modelled separately with deployment assumptions.

### Worked network example

A direct route saves 60 kg on 100 eastbound flights per day but causes an average 15 kg tactical penalty on 180 crossing flights. Gross saving is 6,000 kg; induced penalty is 2,700 kg; simplified net saving is 3,300 kg per day before capacity or delay effects. Counting only flights using the new route would overstate benefit by 45%.

### Evaluation questions

- What is the operationally valid reference trajectory?
- Which flights and sectors are affected indirectly?
- Are distance, time and fuel effects measured or modelled?
- Does benefit persist in peak and disrupted conditions?
- Is controller and crew workload acceptable?
- What equipage and coordination are required?
- How does local improvement scale without double counting?

### Applied task

Take a known inefficiency—taxi queue, level-off, vectoring or restricted route—and create a causal map. Separate technical, procedural, capacity, weather and governance causes. Choose one leading indicator and one outcome KPI. Propose a trial with a comparable baseline and state the conditions outside which results must not be extrapolated.

KEY TAKEAWAY: Airspace efficiency is a property of a safe, coordinated network, not merely the shortest line drawn for one aircraft.
    `,
    `
## Extended learning unit: climate-optimised operations

### Learning objectives

- Define an objective function that keeps CO2 and non-CO2 effects visible.
- Assess a route recommendation under forecast uncertainty.
- Establish operational and ethical controls for climate optimisation.

### What an optimiser actually optimises

Flight-planning tools can minimise fuel, cost, time, climate response or a weighted combination. These are not interchangeable. A climate objective may include long-lived CO2 and short-lived contrail or NOx effects using a selected metric and time horizon. If the metric or weights change, the preferred trajectory can change. Governance should set them before the tool is run.

A transparent recommendation shows baseline and alternatives, separate fuel and non-CO2 components, confidence and constraints. It explains why an alternative was rejected. Operators must be able to override a climate recommendation for safety, weather, airspace or operational reasons without an adverse performance incentive.

### Hotspot approach

Research indicates that a relatively small share of flights or trajectory segments may create a large share of predicted contrail warming. Targeting high-confidence, high-impact cases can therefore provide more robust benefit than rerouting every flight. Thresholds should account for forecast skill and maximum acceptable additional fuel.

### Operational case

Route A is the fuel minimum. Route B adds 0.3% fuel and has high predicted contrail avoidance. Route C adds 0.1% and delivers moderate avoidance with higher forecast confidence. A risk-adjusted system may choose C. After flight, the meteorology is updated and results are re-estimated. Accepted recommendations, additional fuel and verified forecast performance are monitored independently.

### Fairness and network governance

Climate rerouting can create cost, delay or airspace burdens for particular operators or regions while climate benefit is global. Capacity constraints mean not every flight can receive its preferred trajectory. Allocation rules should be transparent and coordinated with network management. Trials should monitor whether one airline, route or shift systematically bears the cost.

### Decision protocol

1. State climate metric and time horizon.
2. Set safety and aircraft-performance constraints.
3. Establish minimum benefit and forecast-confidence thresholds.
4. Set maximum fuel, time and capacity penalties.
5. Preserve dispatcher and commander authority.
6. Record offered, accepted and rejected alternatives.
7. Reanalyse with updated weather and observations.
8. Monitor model bias and distributional effects.

### Scenario exercise

The central estimate for a reroute is 12 units of avoided climate impact with a 90% interval from −3 to 28, while added CO2 is equivalent to 2 units with narrow uncertainty. A second route avoids 7 units with a range from 4 to 10 and adds 1 unit of CO2. Discuss expected value, probability of net harm and learning value. Operational deployment may favour the second, while the first remains a research case.

WATCH OUT: A climate score is a model output, not an observable property of a flight. Treat it as decision support with versioning, validation and uncertainty.
    `,
    `
## Extended learning unit: ground operations and verified benefit

### Learning objectives

- Convert equipment deployment into measured fuel, emissions and local-impact results.
- Identify reliability and behaviour factors that determine real adoption.
- Build a baseline that credits only avoidable APU or combustion-equipment use.

### Capability is not outcome

Electric ground-support equipment, fixed electrical ground power, pre-conditioned air, single-engine taxi procedures and towing can reduce fuel, local air pollution and noise. Purchasing equipment creates capability. Benefit occurs only when the equipment is available, connected and used in conditions where it replaces a combustion source.

Measurement starts with a counterfactual. APU time during mandatory engine or system checks may not be avoidable. A stand without compatible ground power is not eligible for the same saving as an equipped stand. Baselines should segment stand, aircraft, season and turnaround type. Metered electricity, diesel or fuel displacement and operating hours are stronger than equipment counts.

### Electrification calculation

Suppose electric units displace 150,000 litres of diesel. If the approved diesel factor is 2.68 kg CO2 per litre, avoided direct CO2 is about 402 tonnes. Chargers record 420 MWh at the meter. With electricity at 80 kg CO2e/MWh, operational electricity emissions are about 33.6 tonnes, giving a simplified operational climate benefit of 368 tonnes before manufacturing and upstream diesel. Local NOx, particles and noise are additional categories, not converted automatically into CO2.

If backup diesel is used for 30% of planned hours because chargers fail, calculate actual displacement rather than assuming full replacement. Charger reliability may create more environmental value than buying additional vehicles that cannot charge.

### Fixed-ground-power case

An airport installs fixed electrical ground power on 20 stands. Adoption is initially 45% because cables are damaged, procedures are inconsistent and crews distrust availability. A cross-functional team improves preventive maintenance, connection responsibility, status displays and turnaround training. Adoption rises to 82%. The project reports APU minutes avoided and electricity used, not “20 green stands.”

### Reliability architecture

- charger and ground-power availability;
- queue and connection time;
- battery state of health;
- peak demand and load management;
- compatible stands and aircraft;
- preventive maintenance and spares;
- user competence and safe procedures;
- metered energy and backup use.

### Applied task

Select one ground measure. Define eligible opportunities, baseline source, installed capability, utilisation rate, displacement factor and guardrails for turnaround time and safety. Create a funnel: eligible events → equipment available → connection attempted → successful use → verified fuel displaced. The drop-off between stages tells management where to act.

KEY TAKEAWAY: A ground programme earns environmental credit through reliable displacement demonstrated in operational data.
    `,
  ]),

  ...entries(M6, [
    `
## Extended learning unit: how aviation environmental policy works

### Learning objectives

- Distinguish standards, market instruments, mandates and disclosure requirements.
- Build an applicability map by entity, route and activity.
- Explain why corporate, regulatory and product totals may legitimately differ.

### A policy portfolio

Aviation environmental policy uses several instruments because no single tool addresses every barrier. Product and operational standards set minimum technical requirements. Emissions trading creates a price and cap within a jurisdiction. CORSIA addresses growth in covered international aviation through eligible units and fuels. Fuel mandates such as ReFuelEU stimulate supply. Noise and local-air-quality rules address place-specific exposure. Monitoring and disclosure create evidence and accountability.

These instruments overlap but are not interchangeable. A tonne reported in a corporate inventory may not equal a tonne within EU ETS or CORSIA because consolidation, route, gas and life-cycle boundaries differ. Reconciliation should explain the bridge rather than forcing all totals to match.

### Applicability mapping

Begin with legal entity, operator, aircraft, route pair, departure and arrival jurisdiction, activity type and reporting year. For every instrument record scope, exemptions, responsible authority, monitoring plan, data fields, verification, surrender or compliance action and deadline. Controlled route-pair logic is safer than expecting employees to recall narrative rules.

Version control matters because participation lists, thresholds, guidance and legal scope can change. A rule engine should preserve the version applied to each reporting period and include test cases for domestic flight, international flight, diversion, positioning leg and excluded activity.

### Case: one flight, several accounts

An intra-European flight may appear in the operator's corporate Scope 1 inventory, aviation EU ETS records, ReFuelEU reporting and internal efficiency dashboard. CORSIA treatment depends on route and programme scope. The same flight data can be reused, but each calculation applies different definitions. A data warehouse keeps the raw flight event once and attaches governed classifications for each purpose.

### Instrument comparison exercise

Create a matrix with rows for CORSIA, EU ETS, ReFuelEU, non-CO2 MRV, aircraft CO2 certification, airport noise and corporate inventory. Columns: regulated actor, covered activity, environmental quantity, compliance action, verification and claim limitation. This exposes gaps where one team assumes another system has already addressed an impact.

### Governance controls

- legal source and effective date;
- documented internal interpretation;
- accountable legal entity and process owner;
- data fields and system implementation;
- inclusion and exclusion test cases;
- verifier or authority feedback;
- change trigger and training update;
- reconciliation to finance and corporate reporting.

WATCH OUT: “Compliant” does not mean “net zero,” and an environmental improvement does not automatically satisfy a legal obligation. State the instrument and outcome precisely.
    `,
    `
## Extended learning unit: CORSIA scope and compliance cycle

### Learning objectives

- Describe CORSIA's phases, route-based coverage and annual MRV cycle.
- Explain the role of the baseline, sector growth factor, eligible fuels and emissions units.
- Identify evidence needed from flight data to cancellation or fuel claim.

### Purpose and phases

ICAO's Carbon Offsetting and Reduction Scheme for International Aviation applies to covered international routes between participating states according to its rules. It has a pilot phase for 2021–2023, first phase for 2024–2026 and second phase for 2027–2035. As of 2026, ICAO lists 130 participating states; the current state-pair document must be used for each year.

After the pilot phase, CORSIA uses 85% of 2019 covered emissions as its baseline for 2024–2035. For 2024–2032, operator requirements use the sectoral growth factor; an individual component begins in 2033 under the adopted design. These details should be calculated using current ICAO implementation documents, not a simplified training percentage.

### Annual cycle

Operators monitor international flight and fuel data under an approved emissions monitoring plan. They perform completeness and reasonableness controls, calculate CO2, prepare an emissions report, obtain independent verification and submit through the administering state. States transmit aggregate information through the CORSIA Central Registry. For applicable compliance periods, operators meet offsetting requirements by cancelling eligible emissions units, adjusted according to eligible fuel claims and programme rules.

### Eligible fuel and units

CORSIA Eligible Fuels must come from producers certified by an ICAO Council-approved Sustainability Certification Scheme. Batch quantity, life-cycle value and chain of custody support the claim. Eligible emissions units must come from programmes approved for the relevant compliance period and meet vintage and other criteria. Buying an unapproved credit does not fulfil CORSIA.

### Flight-population case

An operator begins with all operated flights and assigns departure and arrival states, international or domestic status and exemption logic. It compares the resulting population with scheduling, dispatch and movement records. Missing tail numbers, diversions and code-share arrangements are investigated. Fuel totals are reconciled to operational and finance records within expected differences.

### Compliance-chain exercise

Trace one tonne of reported CO2 through these controls: flight occurrence → route classification → fuel measurement → emission factor → verified report → state submission → offsetting requirement → eligible unit purchase → registry cancellation. For each link, list evidence and failure mode. Add a SAF claim and identify where double counting could occur.

### Current official evidence

- [ICAO CORSIA overview and implementation elements](https://www.icao.int/CORSIA)
- [ICAO participating state pairs](https://www.icao.int/CORSIA/corsia-states-chapter-3-state-pairs)
- [ICAO CORSIA eligible fuels](https://www.icao.int/CORSIA/corsia-eligible-fuels)

KEY TAKEAWAY: CORSIA is a governed compliance chain; it is not a generic promise that international aviation emissions have physically disappeared.
    `,
    `
## Extended learning unit: EU ETS and non-CO2 MRV

### Learning objectives

- Explain cap-and-trade, allowance surrender and aviation MRV at working level.
- Describe the 2026 transition to full auctioning for aviation allowances.
- Separate non-CO2 monitoring from a proven mitigation or surrender obligation.

### EU ETS aviation cycle

The EU Emissions Trading System caps covered emissions and requires operators to surrender allowances corresponding to verified emissions within scope. Aircraft operators maintain an approved monitoring plan, monitor fuel and flights, submit an annual verified emissions report and surrender allowances by the applicable deadline. Since 2024, the surrender deadline is 30 September. Exact geographic scope and exemptions must be checked for the reporting year.

Free aviation allocation was reduced by 25% in 2024 and 50% in 2025, moving to full auctioning from 2026. This increases the direct financial exposure of covered emissions and reinforces the need for accurate forecasting and reconciliation. It does not change the physical CO2 calculation for a flight.

### Data controls

Begin with the complete flight population, apply EU ETS scope, then link fuel through the approved methodology. Reconcile schedule, actual movement and fuel data. Investigate cancellations, diversions, positioning flights, duplicate legs and missing measurements. Manual substitutions must be authorised and visible. Verified emissions should reconcile with allowance forecasting and surrender records, allowing documented timing and boundary differences.

### Non-CO2 MRV

The EU framework requires aircraft operators to monitor and report non-CO2 aviation effects for covered flights from 1 January 2025. The framework uses flight, aircraft, fuel and meteorological inputs and modelling. Its purpose includes building evidence for potential future policy. Organisations should not interpret the existence of a modelled non-CO2 figure as proof that a specific route or fuel intervention has delivered an audited climate saving.

Model governance includes the approved tool or method, input completeness, meteorological source, fuel characteristics, model version, reprocessing and verifier evidence. CO2 and non-CO2 results remain distinguishable because their physics and policy treatment differ.

### Reconciliation case

The operations system contains 120,000 flight legs; 82,000 fall within the preliminary EU ETS geography. After exclusions and corrections, 80,500 are reportable. The audit trail explains every population change with a rule and count. Fuel totals are then reconciled with independent aggregate data. A reviewer can reproduce the route population before inspecting detailed calculations.

### Applied control test

Create five test flights: covered intra-EEA, domestic, outermost-region scenario, excluded public-service case and diversion. Document expected treatment and legal source. Run them through the classification logic after every rule update. This converts legal interpretation into testable system behaviour.

### Evidence base

- [European Commission: reducing emissions from aviation](https://climate.ec.europa.eu/eu-action/transport-decarbonisation/reducing-emissions-aviation_en)
- [EASA: aviation environmental impacts and non-CO2 MRV](https://www.easa.europa.eu/en/domains/environment/eaer/aviation-environmental-impacts)

WATCH OUT: Allowances, SAF support, non-CO2 data and operational reductions are different mechanisms. A dashboard should never merge them into one unexplained “emissions saved” total.
    `,
    `
## Extended learning unit: ReFuelEU obligations and anti-tankering

### Learning objectives

- Identify the roles of fuel suppliers, aircraft operators and airports under ReFuelEU.
- Explain SAF shares and the 90% uplift obligation at a conceptual level.
- Reconcile operational, supplier and verifier evidence.

### Three interacting actor groups

Fuel suppliers are responsible for placing minimum shares of SAF, including synthetic fuel sub-shares, into the fuel supplied at covered Union airports according to the regulation. Aircraft operators report fuel requirements and uplift and must address the anti-tankering obligation. Union airport managing bodies facilitate access and report relevant infrastructure or supply issues. Exact duties and definitions follow the legal text and current guidance.

The SAF minimum begins at 2% in 2025 and rises over time. A mandate percentage describes a supply obligation across the applicable calculation; it does not mean every individual aircraft tank contains that exact fraction. Supply can be managed within regulatory averaging rules, while claims must match actual eligible attributes.

### Why anti-tankering matters

Economic tankering occurs when extra fuel is uplifted at one airport to avoid purchasing elsewhere. Carrying fuel increases aircraft mass and burn and can undermine local fuel-policy goals. ReFuelEU requires yearly fuel uplift by an aircraft operator at a given covered airport to be at least 90% of yearly aviation fuel required, with defined treatment for safety, operational and supply circumstances.

Compliance is annual, not a simplistic requirement that every departure uplift 90% of its trip need. Operators need route- and airport-level data, justified exceptions and verifier evidence. Commercial fuel decisions must align with flight-safety authority.

### Worked airport example

At Airport X, yearly fuel required for covered departures is 20,000 tonnes. The conceptual 90% threshold is 18,000 tonnes before detailed adjustments. Actual uplift is 17,200 tonnes. The team investigates 800 tonnes below the threshold plus any reporting definitions, eligible justifications and the permitted buffer. It does not apply a penalty calculation from this simplified exercise without the regulation and verifier manual.

### Data model

- flight and departure airport;
- yearly aviation fuel required;
- actual uplift;
- fuel in tanks and operational movement;
- safety or operational justification;
- supplier and airport constraint evidence;
- SAF quantity and sustainability attributes;
- verifier findings and corrections.

### Integrated case

A supplier reports SAF delivery at an airport while an operator reports low uplift due to repeated fuel unavailability. The airport records infrastructure constraints. The three datasets should be reconciled. A certificate issued at national level does not automatically prove availability to a particular operator at a specific time.

### Evidence base

- [European Commission ReFuelEU FAQ](https://transport.ec.europa.eu/transport-modes/air/environment/refueleu-aviation/faq-refueleu-aviation_en)
- [Manual for aircraft operators and verification bodies](https://transport.ec.europa.eu/document/download/a8d0373f-5d52-4299-b805-d2aad11ee176_en?filename=refueleu-aviation-ao-verifier-manual.pdf)

KEY TAKEAWAY: ReFuelEU links fuel supply, aircraft uplift behaviour and airport capability; strong compliance depends on reconciling all three.
    `,
    `
## Extended learning unit: audit-ready MRV and environmental claims

### Learning objectives

- Design monitoring, reporting and verification controls from source to claim.
- Distinguish error, uncertainty and fraud risk.
- Review environmental wording against evidence and ownership of attributes.

### MRV as a control system

Monitoring defines what is measured and how. Reporting aggregates it under controlled rules. Verification evaluates whether evidence and calculations meet the required standard. MRV should be designed before the reporting year, not reconstructed after it. Source-system ownership, interfaces, manual adjustments, factor versions and retention all require controls.

A useful control matrix links each material risk to a preventive or detective control, owner, frequency and evidence. Risks include incomplete flight population, wrong route classification, unit conversion, duplicated certificate, outdated emission factor, spreadsheet overwrite and unapproved claim. Control performance is itself monitored.

### Three lines of review

Operational teams own data and first-level controls. Environment or compliance functions define methodology, reconcile and challenge. Independent internal audit or external verifiers provide assurance according to their mandate. Independence is weakened if the reviewer designs and operates the same calculation they later approve.

### Claim architecture

Every environmental claim should state subject, boundary, period, baseline, quantity, method and assurance. Terms such as “carbon neutral,” “zero emission,” “100% sustainable” and “avoided emissions” require special scrutiny. Purchasing allowances, offsets or SAF attributes does not change the aircraft's physical fuel burn; communication must explain the mechanism.

### Double-counting case

A SAF producer reports reduced product intensity, an airline claims the same batch in CORSIA, and a corporate travel buyer receives a book-and-claim certificate. This can be legitimate only if accounting rules define distinct claims or transfer the exclusive attribute. The registry and contracts must prevent incompatible claims. A marketing team cannot assume that paying part of the premium creates ownership.

### Audit sample

For one reported figure, obtain the source event, invoice or meter record; reproduce calculation and conversion; inspect approvals; trace into the final report; and compare the public statement. Expand testing when an error suggests a systematic issue. Record corrections and assess whether previous reports or claims need restatement.

### Claim review questions

- What physical or accounting change occurred?
- Who owns the environmental attribute?
- Is the result measured, modelled, certified or projected?
- Which emissions and life-cycle stages are included?
- Has activity or production volume changed?
- Could another party make the same claim?
- What uncertainty and limitation would alter audience interpretation?

### Final applied exercise

Rewrite: “Our new process is carbon-free and saves 1,000 tonnes every year.” A defensible version identifies the process boundary, baseline, verified electricity or fuel change, reporting year, model used to annualise, residual emissions and assurance status. If evidence supports only a pilot, say “the pilot indicates” rather than claiming annual delivered savings.

KEY TAKEAWAY: Audit readiness is the ability to reproduce a result, explain its limits and prove the right to communicate it.
    `,
  ]),

  ...entries(M7, [
    `
## Extended learning unit: the circular hierarchy in aerospace

### Learning objectives

- Apply prevention, life extension, reuse and recycling in the correct order.
- Explain why airworthiness and traceability shape circular options.
- Distinguish waste diversion from reduction in virgin-resource demand.

### Circularity begins before waste exists

The circular hierarchy prioritises avoiding unnecessary material and extending product value before recycling. In aerospace this can mean designing a durable, repairable component; preventing defects and excess stock; using approved remanufactured or reused parts; recovering high-quality material; and using energy recovery or disposal only for residuals. The hierarchy is a decision guide, not an absolute rule: safety, performance, hazardous-substance control and life-cycle evidence remain mandatory.

Aerospace products remain in service for decades. Maintenance, repair and upgrade can therefore deliver major resource value. Configuration control and traceability allow a part to remain safe and supportable. A component that is physically reusable but lacks approved history may not be eligible for installation. Circular design must consider records, inspection and certification alongside material.

Recycling performance has several levels. Collection rate shows material captured. Recycling process yield shows output after losses. **Closed-loop** recovery produces material suitable for an equivalent high-value application; downcycling produces a lower-grade use. Avoided primary production depends on quality, demand and actual substitution, not just the fact that waste left the site.

### Aerospace case: obsolete spare stock

A programme identifies unused parts nearing obsolescence. Options include transfer to another operator, recertification, harvesting approved subcomponents, use in training, material recovery or disposal. The team verifies ownership, export controls, airworthiness documentation, shelf life, hazardous substances and demand. A part reused in service usually preserves more embedded value than one melted for metal, but only when safe and legal.

### Waste-diversion calculation

A site generates 1,000 tonnes. It recycles 750, sends 150 to energy recovery and 100 to landfill. A headline “90% diverted from landfill” combines materially different outcomes. The recycling rate is 75%; non-landfill treatment is 90%; prevention is unknown. If next year waste falls to 800 tonnes but recycling remains 600 tonnes, recycling rate stays 75% while 200 tonnes of waste have been prevented. Both absolute and treatment indicators are needed.

### Circular decision protocol

1. Define the function and demand that create the material flow.
2. Prevent specification, purchasing or process losses.
3. Extend product and component life safely.
4. Reuse with traceability and approval.
5. Recover material at the highest verified quality.
6. Control hazardous residuals and final treatment.
7. Measure virgin material displaced, not only waste destination.

### Applied task

Choose one waste stream and map why it becomes waste. Separate technical defect, process loss, expiry, packaging, demand change and specification. For each cause, propose prevention before treatment. Add an airworthiness, quality or chemical-safety constraint and the evidence needed to release a circular option.

KEY TAKEAWAY: Circular aerospace preserves verified function, material quality and information—not merely tonnes diverted from landfill.
    `,
    `
## Extended learning unit: design for durability, repair and disassembly

### Learning objectives

- Translate circular ambitions into engineering requirements.
- Compare durability, repairability and disassembly without sacrificing performance.
- Identify digital and physical information needed across a long service life.

### Design locks in future options

Material, joining method, architecture, access and inspection requirements influence impacts for decades. Design for durability targets fatigue, corrosion, wear and environmental exposure. Design for repair provides inspection access, approved repair schemes, replaceable wear elements and achievable tolerances. Design for disassembly enables separation of valuable materials or components with reasonable time and damage.

These strategies can conflict. Permanent adhesive bonding may reduce mass and fastener count but make separation difficult. A removable joint may add weight or maintenance. A modular component may improve replacement but increase interfaces. Environmental assessment must cover operation and maintenance, not reward disassembly in isolation.

### Requirements and verification

“Make it recyclable” is not a verifiable requirement. A stronger requirement might define target material families, prohibited combinations, access time, separation purity, approved recovery route and documentation. Verification may use design review, disassembly demonstration, repair trial, material declaration and recycler feedback.

Material and substance information must survive organisational and product change. Drawings, specifications, configuration records, repair history and hazardous-material data support future decisions. A digital product passport concept can improve access, but data quality, confidentiality, ownership and long-term format remain practical challenges.

### Design case: bonded versus mechanically joined panel

The bonded option is lighter and has fewer parts. The bolted option is easier to remove and repair but adds mass and potential stress concentration. The team compares service fuel effect, manufacturing yield, inspection, typical damage, repair frequency, joint life and end-of-life separation. It may select bonding while designing a defined repair and material-recovery process. Circularity informs the trade-off; it does not dictate one joining technology.

### Repair decision

Repair is preferable only when it restores required function safely and its total impacts are lower than replacement. Assessment includes inspection, transport, energy, repair material, success rate, additional life and avoided new part. A low-success repair that ultimately leads to replacement can increase total impact.

### Engineering checklist

- design life and dominant failure modes;
- inspection method and accessibility;
- replaceable or repairable features;
- standard versus proprietary interfaces;
- material compatibility and separation;
- approved repair limits and data;
- configuration and history retention;
- end-of-life partner capability.

### Applied exercise

Select a component and imagine three likely service damage scenarios. For each, ask whether damage can be detected, accessed and repaired; which data and tools are required; and what material remains at end of life. Propose one design change and evaluate its mass, cost, certification and operational consequences.

WATCH OUT: A component that is easy to disassemble but fails sooner can consume more resources over its life. Always compare delivered function and service life.
    `,
    `
## Extended learning unit: production yield and high-value materials

### Learning objectives

- Calculate yield and buy-to-fly without confusing chips with total environmental loss.
- Identify prevention options in design, supply and manufacturing.
- Build a verified closed-loop recovery case for aerospace metals.

### Measure material productivity

Production yield is conforming output divided by material input under a defined boundary. The buy-to-fly ratio compares purchased starting mass with flying-part mass. A high ratio can indicate opportunity, especially for expensive and impact-intensive titanium or aluminium, but interpretation requires process context. Some removed mass is unavoidable for geometry or metallurgical quality; test coupons, setup and nonconforming parts should be separated.

Improvement starts upstream. Near-net-shape forging, additive manufacturing, optimised plate size, nesting and design standardisation can reduce input. Process control, tool condition and defect prevention improve first-pass yield. Segregation preserves alloy value after chips are created. Recycling is important, but preventing virgin input normally retains more value.

### Worked material balance

A titanium forging weighs 100 kg and the final part 16 kg. The buy-to-fly ratio is 6.25:1. Of the 84 kg removed, 78 kg are clean segregated chips, 2 kg are contaminated fines and 4 kg are test or setup material. If 95% of clean chips are accepted into a high-quality recovery route, 74.1 kg are recovered; that does not mean 74.1 kg of new aerospace-grade titanium is automatically displaced. Remelting yield, alloy quality and destination must be verified.

If a near-net-shape route reduces starting mass to 72 kg while part mass remains 16 kg, input falls 28%. Even with a similar recycling rate, primary-material demand and machining effort can decline. The team compares forging energy, lead time, tooling, qualification and defect risk.

### Closed-loop case

A site and supplier establish separate containers by alloy family, contamination controls, weighing, collection and certificate of destination. Recovered material returns into an approved aerospace supply chain where technically possible. Contracts define ownership, quality and data. Finance captures value; Procurement and Quality manage supplier acceptance; Production protects segregation; Environment verifies mass balance.

### KPI set

- purchased mass by alloy;
- conforming delivered-part mass;
- first-pass yield and rejected parts;
- chip and offcut mass by quality;
- contamination and recovery yield;
- verified destination and grade;
- recycled content or primary material displaced where evidenced;
- process energy per conforming part.

### Improvement lab

For one material flow, draw a Sankey-style balance from purchase to conforming part, by-products, rework, waste and stock change. Reconcile to within an agreed tolerance. Rank opportunities by mass, environmental intensity, cost and decision authority. Separate immediate segregation action from design changes requiring qualification.

KEY TAKEAWAY: High-value circularity combines less input, fewer defects and verified quality recovery; scrap revenue alone is not success.
    `,
    `
## Extended learning unit: maintenance, reuse and serviceable parts

### Learning objectives

- Explain how maintenance preserves embedded product and material value.
- Distinguish repair, reuse, remanufacture and cannibalisation under controlled airworthiness.
- Evaluate a serviceable-part strategy using life, records, demand and environmental evidence.

### Life extension is a circular strategy

Aircraft and components can remain in service for decades because inspection, maintenance, repair and overhaul preserve safe function. Extending useful life avoids or delays new production and retains the energy, materials and skilled work already embedded in the product. Any claimed reduction in material demand or life-cycle emissions depends on additional service delivered, repair success, the replacement counterfactual and any fuel-efficiency consequence of retaining older equipment.

Circular maintenance is governed by airworthiness. A removed part is not reusable merely because it looks intact. Identity, configuration, life consumption, maintenance history, storage, inspection and approved release determine eligibility. Documentation is part of the product's value. Losing traceability can turn a technically functional component into unusable material.

**Repair** restores an item within approved data. **Reuse** installs an eligible item again for the same function. **Remanufacture** returns a product through a controlled industrial process to a defined condition and warranty. **Parts harvesting or cannibalisation** removes eligible components from another asset to support service. Each route requires authority, records, inspection and protection against counterfeit or uncontrolled material.

### Pooling and rotable case

An operator maintains a pool of rotable components. Better forecasting and repair turnaround reduce emergency purchase and transport while increasing utilisation of existing assets. The environmental assessment records components in pool, removals, no-fault-found rate, repair yield, turnaround, remaining life and avoided new procurement. Availability and safety remain guardrails; excessive inventory is not automatically circular.

### Repair-versus-replace decision

Repair option A uses 15 kg of material and 120 kWh, succeeds 90% of the time and extends life five years. Replacement uses a new 80 kg component. A screening comparison includes failed repairs that are later replaced, transport, inspection and any performance difference. For 100 items, 90 successful repairs deliver 450 component-years of added service; ten failed attempts add impacts before replacement. Reporting only the successful repair footprint would understate the programme.

### Serviceable-part control matrix

- unique identity, configuration and serial status;
- approved records and release documentation;
- life limit and remaining cycles or hours;
- storage and preservation condition;
- inspection, repair data and success rate;
- demand, pool level and obsolescence risk;
- controlled disposition when no longer eligible;
- avoided purchase and environmental method.

### Obsolescence case

A programme holds 400 spare units for a platform approaching retirement. Demand analysis shows only 120 are likely to be needed. Before scrapping, the team checks transfer to other operators, approved repair programmes, alternative supported platforms and training use. Parts retained for service remain preserved and traceable; non-serviceable units are permanently controlled before material recovery. Inventory reduction is based on demand and risk, not a target to dispose quickly.

### Applied task

Choose one high-value repairable component. Map removal, quarantine, transport, inspection, repair, release, pool and final disposition. At each handoff identify data, owner, delay and risk. Propose one improvement that increases successful life extension and define how avoided new production will be estimated conservatively.

WATCH OUT: Reuse without approved traceability is not circular innovation; it is an airworthiness and product-integrity risk.
    `,
    `
## Extended learning unit: end-of-life aircraft and component value

### Learning objectives

- Plan decommissioning through safety, traceability, reuse and material recovery.
- Distinguish part harvesting from uncontrolled resale.
- Measure recovery quality and final residuals across the dismantling chain.

### A controlled final life stage

Aircraft retirement begins with ownership, records, configuration and intended future use. Decommissioning may include fluid removal, hazardous-material control, component preservation, dismantling and material processing. Decisions should consider whether the aircraft may return to service, supply parts or enter final dismantling. Poor storage can destroy component and material value.

Serviceable components can retain high functional value, but eligibility depends on approved release, life limits, traceability, condition and market demand. Security, export control and intellectual-property rules may also apply. Circularity cannot bypass airworthiness or create an uncontrolled counterfeit risk.

Materials require identification and separation. Aluminium alloys, titanium, steel, wiring, electronics, interiors and composites follow different routes. Mixed or contaminated fractions lose value. Depollution and selective dismantling before shredding can improve recovery but require labour and data. The optimal depth depends on component value, safety and material markets.

### Decommissioning case

An aircraft is retired after 25 years. The project establishes a digital inventory of engines, landing gear, avionics, rotable parts and life-limited components. Fluids and hazardous items are removed under controlled procedures. Parts with complete records enter approved inspection and release; training-use parts are permanently identified. Remaining structure is separated by alloy where viable. Final destination certificates close the mass balance.

### Mass-balance example

For a 50-tonne dismantling input, 12 tonnes are components prepared for reuse, 28 tonnes metals sent to verified recyclers, 4 tonnes other material recovered, 5 tonnes residual treatment and 1 tonne unresolved stock difference. A “88% recovery” claim might combine reuse and material recovery: (12 + 28 + 4) / 50. The report should show categories separately because functional reuse, metal recycling and other recovery preserve different value. The 2% reconciliation gap requires investigation.

### Supplier governance

Contracts define depollution, part controls, data, downstream due diligence, export, mass reconciliation and evidence. Audit rights extend beyond the first waste contractor where material risk exists. The lowest dismantling price can hide poor traceability or low-value export.

### Applied plan

Create a decommissioning hierarchy for one assembly: reuse as assembly, harvest parts, remanufacture, recover material and treat residue. At each level specify release authority, evidence, market and stop condition. Add worker safety and hazardous-material controls.

KEY TAKEAWAY: End-of-life value is protected by early planning, configuration data, approved reuse and verified downstream treatment.
    `,
  ]),

  ...entries(M8, [
    `
## Extended learning unit: interpreting ATAG, IATA and ICAO 2050 objectives

### Learning objectives

- Deconstruct a third-party sector target statement into boundary, pathway and residual balance.
- Distinguish gross reduction, neutralisation, compensation and avoided emissions.
- Review an aircraft or corporate claim for technical accuracy.

### A target needs six definitions

Airbus guidance allows reference to net zero when the third party that established the target is named. In this course, the relevant references are the ATAG, IATA and ICAO aviation-sector objectives of net-zero carbon emissions by 2050. Any statement should define the third party, entity or system, greenhouse gases, emission scopes, target year, reduction pathway and treatment of residual emissions. It should also address whether the boundary includes only flight CO2 or life-cycle fuel emissions, non-CO2 effects, manufacturing, airports and supply chain.

Gross emissions are physical emissions before offsets or removals. Deep reduction changes the energy, technology or activity creating them. **Neutralisation** generally refers to counterbalancing residual emissions with removals, while compensation can include avoided-emission credits depending on framework. Avoided emissions compare with a hypothetical alternative and are not subtracted automatically from a company's inventory.

Durable carbon removal faces quantity, storage and reversal challenges. A roadmap should show gross trajectory and residual balancing separately. This prevents a growing operational footprint from appearing to fall because more credits were purchased.

### Aviation system boundary

Commercial aviation transition involves efficient aircraft, operations, airspace, SAF, new propulsion, infrastructure and potentially demand-side measures and removals. Non-CO2 effects require separate treatment because CO2-equivalent methods depend on metric and time horizon. Manufacturing and supply-chain emissions matter to an aerospace company even when use-phase fuel dominates a conventional aircraft life cycle.

### Claim review case

“This aircraft enables net-zero flight” is not acceptable wording: it attaches a third-party sector target to a product and leaves essential conditions unstated. A defensible alternative identifies a measured or modelled fuel-burn difference against a named predecessor, mission and method, and states approved SAF compatibility separately. Airbus may then state, as a separate sentence, that it seeks to contribute to the ATAG, IATA and ICAO aviation-sector objectives of net-zero carbon emissions by 2050.

### Gross-and-net example

Baseline gross emissions are 1 million tonnes. Efficiency and fuel actions reduce them to 650,000 tonnes by target year. The organisation acquires 650,000 tonnes of qualifying removals. Net balance may be reported as zero under the chosen framework, but gross emissions remain 650,000 tonnes and must be visible. If only 400,000 tonnes are durable removals and the rest avoided-emission credits, claim terminology may need to differ.

### Integrity checklist

- complete and relevant boundary;
- gross absolute pathway and near-term milestones;
- separate CO2 and non-CO2 explanation;
- transparent technology and demand assumptions;
- residual quantity after deep reduction;
- quality, durability and ownership of removals;
- annual progress and correction mechanism;
- wording matched to measured, contracted or projected evidence.

WATCH OUT: Do not apply “net zero,” “carbon neutral” or “zero emission” to an Airbus aircraft, service or programme. Name ATAG, IATA or ICAO when discussing their sector objectives, and use a quantified comparator and boundary for any lower-emissions statement.
    `,
    `
## Extended learning unit: integrating the decarbonisation levers

### Learning objectives

- Model fleet, operations, fuel and technology sequentially to prevent double counting.
- Identify resource and infrastructure interactions among levers.
- Build central and stress-test pathways rather than one deterministic forecast.

### Why percentages cannot simply be added

Each lever acts on a changing baseline. Fleet renewal reduces fuel to which operational improvements and SAF shares apply. Efficiency reduces SAF volume required for the same activity. New propulsion shifts demand from liquid fuel to electricity or hydrogen and changes infrastructure. Traffic and mission mix influence every absolute result.

Apply measures in a defined sequence or integrated model. Start with activity and fleet. Apply avoidable activity or network changes where in scope. Apply aircraft and operational efficiency. Allocate fuel pathways to compatible fleet and locations. Add new propulsion according to turnover and mission. Calculate residual CO2 and treat non-CO2 separately. Only then apply residual balancing according to the target framework.

### Worked portfolio

Baseline fuel is 10 million tonnes. Fleet and operations together reduce demand 20%, leaving 8 million. SAF supplies 30% of the remaining fuel, or 2.4 million tonnes; fossil fuel is 5.6 million. It would be wrong to claim a 20% efficiency reduction plus a 30% SAF volume equals a 50% emissions reduction. SAF has a pathway-specific life-cycle reduction, not 100%, and applies to the reduced energy base.

If SAF life-cycle reduction is 70% against the chosen comparator, its simplified additional contribution is 2.4 × 70% = 1.68 million baseline-equivalent tonnes of fuel impact, subject to energy and emissions methodology. Total result must be calculated in emissions units, with upstream and non-CO2 boundaries explicit.

### Dependencies

SAF depends on feedstocks, electricity, hydrogen, plants and certification. Hydrogen aircraft depend on aircraft technology, low-emission hydrogen and airport networks. Fleet renewal depends on production and airline capital. ATM improvement depends on cross-border coordination and deployment. No function controls the entire pathway, so each dependency needs an external owner, evidence and trigger.

### Scenario architecture

Build at least three pathways: central; delayed technology and infrastructure; constrained supply of energy meeting the specified life-cycle threshold. Identify no-regret actions common to all, such as data quality, efficiency, material productivity and infrastructure studies. Test traffic, fuel price, electricity availability, fleet life and policy.

### Applied model check

Take a roadmap waterfall and inspect every percentage. Ask which baseline it acts on, whether it overlaps another lever, whether it is gross or net, and whether it represents technical potential, committed deployment or verified result. Recalculate sequentially. Many optimistic roadmaps fail this simple test.

KEY TAKEAWAY: Integration replaces a collection of attractive percentages with one physically and temporally consistent transition model.
    `,
    `
## Extended learning unit: scenarios, technology gates and adaptation

### Learning objectives

- Build scenarios around decision-relevant uncertainty rather than prediction theatre.
- Define evidence gates and triggers for major technology commitments.
- Adapt a roadmap transparently when assumptions fail.

### Scenario versus forecast

A forecast estimates what is likely. A scenario explores a coherent future that could occur. Scenario planning is useful when fuel supply, technology maturity, traffic, regulation and energy systems are deeply uncertain. The goal is not to select the most attractive line; it is to expose vulnerabilities and decisions.

Choose two or three high-impact uncertainties, such as synthetic-fuel scale and hydrogen-propelled aircraft readiness. Build internally consistent narratives. Quantify implications for fuel, infrastructure, capital and residual emissions. Avoid changing every variable independently without explaining relationships.

### Decision gates

A gate defines evidence, decision authority and consequence. Technical gates may cover subsystem efficiency, tank mass, safety, durability and certification. Industrial gates cover repeatability, supplier capacity and rate. Ecosystem gates cover energy contracts, airport infrastructure and customer operations. Commercial launch should not rely on a component gate alone.

### Trigger-based adaptation

For each critical assumption define indicator, threshold and response. If synthetic-fuel delivered capacity falls 30% below plan for two review cycles, responses might include diversified SAF contracting, additional efficiency, revised deployment and protection of long-term R&D. A trigger is useful only when data, owner and response are pre-agreed.

### Technology case

A new propulsion concept reaches target power but misses mass by 15%. Mission analysis shows the concept remains viable for shorter routes but not the original range. The roadmap branches: continue development for a regional application, invest in mass reduction and reassess long-range timing. This is not hiding failure; it is evidence-based adaptation.

### Option value

Some investment creates the ability to act later: test facilities, supplier capability, airport studies and staff competence. Option-building should have learning milestones and budget limits. It should not be credited with future emissions reductions before deployment.

### Scenario workshop

1. Define the strategic decision and time horizon.
2. List external uncertainties and internal choices separately.
3. Select two critical uncertainties and create 3–4 coherent worlds.
4. Quantify demand, energy and technology implications.
5. Identify no-regret actions and scenario-specific bets.
6. Define signposts, triggers and owners.
7. Review annually or when a trigger is crossed.

REFLECTION: Which assumption in the current roadmap has no monitoring owner because it is considered “external”? External dependencies are precisely the ones that need signposts.
    `,
    `
## Extended learning unit: connecting employee roles to outcomes

### Learning objectives

- Translate a corporate target into decisions controlled by specific functions.
- Avoid engagement campaigns that lack authority, data or operational relevance.
- Build a team action canvas with outcome verification.

### Line of sight

Employees need a clear link between daily decisions and environmental outcomes. Asking everyone to “reduce the carbon footprint” is too broad. Engineering can influence mass, efficiency, material, repair and qualification. Procurement influences supplier evidence, feedstock, energy and packaging. Production controls yield, process parameters, chemicals and segregation. Maintenance preserves product life and performance. Digital teams govern data. Finance integrates environmental value and risk into investment.

Line of sight contains four elements: the environmental hotspot, the decision the role controls, the operational behaviour or control, and the verified outcome. Without control authority, engagement becomes symbolic. Without an outcome measure, activity can be mistaken for impact.

### Team case: compressed-air loss

Employees report leaks, but a campaign initially counts only reports. The improved system maps leak detection to work order, repair, verification and metered energy. Maintenance owns closure time; Production supports access; Energy Management estimates loss using validated methods; Finance verifies cost. The KPI funnel shows leaks identified, assessed, repaired on time and verified closed, plus normalised compressor electricity.

### Decision rights

A RACI can clarify who is responsible, accountable, consulted and informed, but major environmental outcomes often cross functions. Define who can change specification, approve technical deviation, commit supplier terms, release budget and accept residual risk. Meetings do not substitute for these decision rights.

### Avoiding behavioural traps

Do not ask individuals to compensate for system constraints they cannot change. Switching off equipment may be inappropriate where process or safety requirements apply. Encourage problem reporting and improvement ideas while routing them to technical owners. Recognise verified team outcomes rather than raw idea counts.

### Team action canvas

1. Hotspot and business process.
2. Decision within the team's control.
3. Current baseline and confidence.
4. Proposed change and causal logic.
5. Safety, quality and compliance guardrails.
6. Dependencies and decision owners.
7. Leading implementation indicators.
8. Environmental outcome and verification.
9. Review date, stop rule and scale-up condition.

### Applied workshop

Select one team. List five recurring decisions and identify which carries the largest environmental influence. Write a measurable improvement that fits existing authority. If authority lies elsewhere, create an escalation or cross-functional decision—not a vague awareness action. Close the exercise with one 30-day evidence task.

KEY TAKEAWAY: Engagement becomes performance when employees have a specific decision, usable evidence and a route to remove system barriers.
    `,
    `
## Extended learning unit: governance, annual review and credible communication

### Learning objectives

- Run an annual roadmap review that changes decisions, not only presentation slides.
- Classify progress by evidence maturity.
- Communicate underperformance and uncertainty without losing credibility.

### Review the model and the delivery system

An annual review compares actual activity, gross emissions, fuel, technology, infrastructure and capital with the assumptions behind the roadmap. It explains variance and updates decisions. A result can differ because implementation failed, external conditions changed, measurement improved or the original assumption was wrong. Each cause requires a different response.

The review should reconcile project-level savings to the corporate or sector total and prevent overlap. If fleet renewal and operational projects both use the same baseline, the portfolio model applies them sequentially. Savings are labelled by evidence: measured, independently verified, estimated from an approved model, contracted, planned or aspirational.

### Governance cadence

Operational KPIs may be monthly; programme risks quarterly; strategic scenarios annually. A board or executive forum approves material assumption changes, capital shifts and public claims. Technical authorities retain safety and certification decisions. Environment assures methodology but does not own every operational action.

### Variance case

SAF delivery is 40% below plan because a facility is delayed. Fleet-efficiency improvement is ahead of plan, while traffic is also higher. The report quantifies each driver and updates residual emissions. It does not net the successful efficiency project against the missing fuel and call all milestones “on track.” Management evaluates supplier diversification, demand scenario and investment while preserving transparent historical targets.

### Credible communication

Good communication states progress and gap together. It avoids changing the baseline without restatement, presenting announced capacity as delivered, or using intensity improvement to conceal absolute growth. Technical review should include people able to challenge climate, regulatory and operational wording. Corrections are made when evidence changes.

### Annual review agenda

- boundary, baseline and methodology changes;
- activity and gross emissions variance;
- verified savings and double-counting check;
- fuel volume, pathway and certified intensity;
- technology and certification gates;
- infrastructure and supplier commitments;
- capital expenditure and delivery risk;
- scenario signposts and trigger status;
- residual emissions and balancing quality;
- public claims requiring update.

### Final capstone

Prepare a one-page decision brief for the greatest roadmap gap. Include the original assumption, current evidence, quantitative consequence, options, dependencies, recommended decision, owner and next review. Label every number measured, modelled or projected. A senior reviewer should be able to understand what changed and authorise action without reading the whole course.

### Evidence base

- [European Aviation Environmental Report 2025](https://www.easa.europa.eu/en/light/topics/european-aviation-environmental-report-2025)
- [IEA aviation overview](https://www.iea.org/energy-system/transport/aviation)
- [Airbus sustainability](https://www.airbus.com/en/sustainability)

KEY TAKEAWAY: A credible roadmap is not one that never changes; it is one that changes through visible evidence, governance and corrective action.
    `,
  ]),
]);
