import Section from '../layout/Section';
import RoleCategories from './RoleCategories';
import CompanyTypes from './CompanyTypes';
import SkillsMatch from './SkillsMatch';
import IndustryFit from './IndustryFit';

export default function SuitableRoles() {
  return (
    <Section
      title="Suitable Roles"
      subtitle="Role recommendations based on profile analysis"
      id="roles"
    >
      <div className="space-y-8">
        <RoleCategories />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SkillsMatch />
          <div className="space-y-6">
            <CompanyTypes />
            <IndustryFit />
          </div>
        </div>
      </div>
    </Section>
  );
}
