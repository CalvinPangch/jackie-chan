import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
