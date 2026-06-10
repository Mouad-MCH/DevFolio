import Timeline from "@/src/components/about/Timeline";
import { profile } from "@/src/data/profile";

const page = () => {
  return (
    <section className="section">
      <div className="wrap">
        <div className="about-top">
          <div className="avatar">
            <div className="avatar__inner">{profile.initials}</div>
            <div className="avatar__ph">[ replace with a real photo ]</div>
          </div>

            <div className="about-bio">
              <span className="over-line">
                <span className="idx">·</span> About me
              </span>
              <h1 style={{ fontSize: "clamp(28px,4vw,42px)", marginTop: 14 }}>
                {profile.name}
              </h1>
              <p className="role">
                {profile.role} · {profile.location}
              </p>

              {profile.bio.map((paragraph, index) =>
                index === 0 ? (
                  <p className="lead" key={index}>
                    {paragraph}
                  </p>
                ) : (
                  <p style={{ color: "var(--text-2)" }} key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </div>
        </div>

        <div style={{ marginTop: 88 }}>
          <div className="section-head mb-5">
            <div>
              <span className="over-line">
                <span className="idx">01</span> The path so far
              </span>
              <h2>Experience &amp; education</h2>
            </div>
          </div>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default page;
