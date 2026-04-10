import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="section reveal">
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading">
          What he <em>brings</em> to a set.
        </h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <ul className="skill-tags">
                {group.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
