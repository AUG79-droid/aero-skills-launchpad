const M3 = "a976f431-fb64-45ea-aa08-6c330022521c";
const M4 = "e7c6459a-7eb1-452d-94eb-3d37037004b0";
const M5 = "2075611c-3d65-4554-9344-ecc3527a0b97";
const M6 = "addd634c-87e8-43c6-9095-b785a0c80c51";
const M7 = "54e69658-1cba-4e40-b56c-3450274fe03b";
const M8 = "ead97f8a-17ee-4635-bdae-d430a9a08365";

export const appliedLabByLesson: Record<string, string> = {
  [`${M3}-lesson-5`]: `
## Workplace challenge: challenge a supply forecast

Review a SAF supply slide that shows only announced nameplate capacity. Rebuild it with columns for pathway, location, feedstock, final investment decision, construction status, certification, contracted volume, expected delivery and confidence. Apply a probability to each project and compare risk-adjusted volume with the legal and voluntary demand scenario. Write one management action for the largest gap. This exercise converts a market headline into a procurement and transition decision.
  `,

  [`${M4}-lesson-3`]: `
## Workplace challenge: verify a hydrogen claim

A supplier offers “100% green hydrogen” but provides no life-cycle value. Treat the colour label as non-compliant claim wording. Request hourly or contractual electricity evidence, electrolyser consumption, production location, water source, liquefaction or compression energy, transport, losses and verification method. Calculate a low and high carbon-intensity scenario. Replace the colour label with contract acceptance criteria expressed in kilograms CO2-equivalent per kilogram hydrogen, including the boundary and evidence-retention requirements.
  `,

  [`${M4}-lesson-4`]: `
## Workplace challenge: test operational readiness

Create a tabletop exercise for a delayed hydrogen delivery during a morning departure wave. Participants should include airport operations, fuel supplier, airline, ground handler, emergency services and aircraft support. Decide minimum inventory, priority rules, safe shutdown, passenger and schedule response, and recovery. Record which organisation owns each interface. Repeat the scenario with one pump unavailable. Readiness is demonstrated when the system maintains safe control under degraded conditions, not only when nominal refuelling succeeds.
  `,

  [`${M4}-lesson-5`]: `
## Workplace challenge: read a demonstrator result

A test announcement states that a new propulsion subsystem “performed successfully.” Ask for the requirement, test condition, duration, repeatability, failure observations and difference from the production environment. Place the evidence at the correct maturity gate and identify the next uncertainty. Write two sentences: one for an engineering review and one for public communication. Both must be accurate, but the external sentence should remain understandable without implying certification or entry-into-service readiness.
  `,

  [`${M5}-lesson-3`]: `
## Workplace challenge: find the displaced inefficiency

For a proposed airspace change, create two lists: flights receiving a shorter trajectory and flights affected through conflict resolution, delay or sector workload. Estimate total fuel for both populations under normal and peak traffic. Add a counterfactual in which the change is unavailable during disruption. Present net benefit, distribution and operational constraints. The change can proceed as a conditional route even if permanent operation is not robust.
  `,

  [`${M5}-lesson-4`]: `
## Workplace challenge: approve a climate route rule

Draft an operational rule containing the minimum predicted non-CO2 benefit, minimum forecast confidence, maximum extra fuel, permitted altitude change, protected safety authority and post-flight review. Include a pause threshold for model performance and a rule preventing annual extrapolation beyond eligible flights. Ask dispatch, flight operations, air-traffic and climate specialists to sign the rule. A model becomes operational only when its limits are converted into controlled decisions.
  `,

  [`${M5}-lesson-5`]: `
## Workplace challenge: diagnose the adoption gap

At one airport, fixed ground power is available for 75% of eligible turns but used for only 48%. Sample missed events and classify them: equipment unavailable, incompatible stand, late connection, procedure, training, maintenance or data error. Quantify APU minutes associated with each cause. Select the two largest controllable losses and assign corrective actions. Re-measure after eight weeks, including turnaround and safety guardrails, before annualising fuel savings.

Include one night shift and one disrupted operating day in the sample so the conclusion represents more than ideal daytime conditions.
  `,

  [`${M6}-lesson-1`]: `
## Workplace challenge: build the route-rule test pack

Create ten fictional flights covering domestic, intra-European, international CORSIA state pairs, positioning, diversion and exemption scenarios. For each, record expected treatment under EU ETS, CORSIA, ReFuelEU and the corporate inventory, with the current legal source. Give the cases to a colleague or system team without the answers. Differences reveal where interpretation, data or implementation is unclear. Retain the pack and rerun it whenever scope or guidance changes.

Record the reviewer, rule version and expected result so the cases also serve as controlled regression tests.
  `,

  [`${M6}-lesson-2`]: `
## Workplace challenge: reconcile a CORSIA population

Start with the dispatch flight total and bridge to CORSIA-reportable legs. Show counts removed for domestic status, state-pair scope, exemption, cancellation and data correction. Reconcile fuel to an independent operational total and investigate the largest differences. Select one eligible-fuel batch and trace quantity, certificate, life-cycle value and exclusive claim. The completed bridge should allow an independent reviewer to reproduce both inclusion and reduction logic.
  `,

  [`${M6}-lesson-3`]: `
## Workplace challenge: control a model update

Assume the approved non-CO2 calculation tool releases a new version that changes historical results by 8%. Define who validates the release, whether prior periods are reprocessed, how both versions are retained and how external statements are corrected. Test a fixed set of flights through old and new versions and explain the change by input or method. Model governance is part of MRV because software updates can alter a reported result without any physical flight change.
  `,

  [`${M6}-lesson-4`]: `
## Workplace challenge: investigate an uplift exception

An airport-level report shows annual uplift below the conceptual 90% requirement. Separate economic tankering, safety fuel, operational disruption, verified supply shortage and data error. Obtain evidence from flight planning, fuel invoices, supplier notices and airport records. Prepare a verifier file containing calculation, justification and corrective action. Do not change operational safety decisions retrospectively to improve the compliance number.
  `,

  [`${M7}-lesson-1`]: `
## Workplace challenge: move one level up the hierarchy

Choose a waste stream currently recycled. Ask what decision creates it and whether that flow can be prevented, reduced, reused or life-extended before recycling. Estimate annual purchased material, waste, recycling yield and verified destination. Propose one upstream change and one recovery improvement. Present them separately so management can see the greater value of preventing the flow while still strengthening treatment for unavoidable residue.
  `,

  [`${M7}-lesson-3`]: `
## Workplace challenge: close the alloy mass balance

For one month, reconcile alloy purchases and opening stock with conforming parts, work in progress, clean chips, contaminated fines, rejected parts and closing stock. Set a tolerance and investigate the unexplained balance. Then trace clean chips beyond the first contractor to their recovered grade and market. Replace the statement “100% recycled” with a precise description of collection, process yield and final use.
  `,

  [`${M7}-lesson-5`]: `
## Workplace challenge: audit a dismantling partner

Select three high-risk outputs from an end-of-life aircraft: serviceable parts, hazardous items and mixed composite or interior waste. Trace each through downstream organisations. Inspect release or destruction controls, weights, permits, export, destination and reconciliation. Test whether training-use parts are permanently identified and whether unsaleable parts can re-enter uncontrolled markets. Close every discrepancy with an owner and deadline before accepting the contractor's recovery percentage.

Finish by reconciling total aircraft input with components retained, parts reused, metals recovered, other treatment, residual disposal and stock still on site. Investigate unexplained mass and obtain evidence beyond the first contractor for any material stream whose destination or legal risk is material.
  `,

  [`${M8}-lesson-1`]: `
## Workplace challenge: red-team a third-party sector target slide

Circle every claim that lacks a named third party, boundary, baseline, year, evidence label or residual treatment. Rebuild the chart with gross emissions, physical reductions, eligible removals and other compensation shown as separate series. Identify the ATAG, IATA or ICAO objective being discussed and do not present it as an Airbus target or product property. Add near-term milestones and the current gap. Ask a technical reviewer to identify what an ordinary reader might misunderstand. The aim is a statement whose apparent meaning matches its accounting and physics.
  `,

  [`${M8}-lesson-2`]: `
## Workplace challenge: remove double counting

Take a roadmap containing fleet renewal, operational efficiency, SAF and hydrogen aircraft. For every lever specify the remaining activity or fuel base to which it applies. Calculate sequentially and compare with the sum of headline percentages. Identify interactions—for example efficiency lowering SAF volume—and record whether benefits are technical potential, planned deployment or verified delivery. Replace the old waterfall with a model that reconciles to gross residual emissions.
  `,

  [`${M8}-lesson-3`]: `
## Workplace challenge: build a decision-ready scenario

Choose two uncertainties with high strategic impact, such as synthetic-fuel availability and aircraft-technology readiness. Construct four coherent scenarios rather than four optimistic-to-pessimistic lines. For each, quantify fuel, infrastructure, fleet and residual-emission consequences. Identify one no-regret action, one option to preserve and one commitment that should wait. Define observable signposts and a named owner for each uncertainty. Present what management must decide in the next twelve months, not only what might happen by 2050.

Add a reverse stress test: determine the exact combination of delay and resource constraint that makes the central pathway miss its milestone, then define the earliest observable warning.

Record who is authorised to activate the corresponding contingency response.
  `,

  [`${M8}-lesson-4`]: `
## Workplace challenge: create a role-to-outcome map

Select Engineering, Procurement, Production, Maintenance, Digital or Finance. List five recurring decisions made by that function and connect each to an environmental flow. Choose the decision with greatest material influence and within real authority. Define a baseline, action, implementation indicator, outcome KPI and safety or quality guardrail. Name every cross-functional approval needed.

Now test the proposal with a frontline employee and the process owner. Ask whether the decision is actually made as documented, whether the data arrive in time and what barrier prevents the preferred behaviour. Revise the action to remove that barrier. Finish with a 30-day experiment and a scale-up rule. This turns a distant aviation target into a controlled decision the team can genuinely own.

At the review, show both the environmental result and the operational consequence. If the experiment shifts workload or risk elsewhere, redesign it before scaling.
  `,

  [`${M8}-lesson-5`]: `
## Workplace challenge: write the uncomfortable variance

Choose the largest roadmap milestone that is behind plan. Quantify the gap and separate delivery failure, external change, improved data and unrealistic original assumption. State the consequence for gross emissions and future milestones. Recommend a corrective decision with cost, owner and trigger. Write a public-facing paragraph that reports progress and gap together without defensive language. Credibility grows when governance identifies bad news early enough to act.
  `,
};
