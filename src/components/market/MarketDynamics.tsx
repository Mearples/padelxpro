import Section from '../layout/Section';
import IndustryGrowth from './IndustryGrowth';
import HiringDemand from './HiringDemand';
import GeographicComparison from './GeographicComparison';
import SalaryBenchmarks from './SalaryBenchmarks';

export default function MarketDynamics() {
  return (
    <Section
      title="Market Dynamics"
      subtitle="Industry trends, hiring demand, and compensation across target markets"
      id="market"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IndustryGrowth />
        <HiringDemand />
        <GeographicComparison />
        <SalaryBenchmarks />
      </div>
    </Section>
  );
}
