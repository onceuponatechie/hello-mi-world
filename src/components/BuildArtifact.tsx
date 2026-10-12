// Static editorial specimens, labelled as concept screens by their figures.
export function BuildArtifact({ slug }: { slug: string }) {
  return (
    <div className={`build-artifact artifact-${slug}`}>
      {slug === "streamline-dashboard" && <div className="artifact-window">
        <div className="artifact-window-top"><span>Streamline</span><span>Account review</span><i /></div>
        <div className="artifact-dashboard">
          <aside><b>Today</b><span>Accounts</span><span>Invoices</span><span>Activity</span></aside>
          <div><p className="artifact-small">Tuesday’s review</p><h3>Give the right accounts<br />your attention.</h3>
            <div className="artifact-metrics"><div><span>To review</span><b>12</b></div><div><span>Assigned</span><b>08</b></div><div><span>Resolved</span><b>04</b></div></div>
            <div className="artifact-account"><span className="artifact-avatar">A</span><div><b>Atlas Studio</b><span>Invoice overdue · updated today</span></div><span className="artifact-pill">Follow up</span></div>
            <div className="artifact-account"><span className="artifact-avatar">N</span><div><b>North & Co.</b><span>Renewal in 7 days · owner assigned</span></div><span className="artifact-pill">Review</span></div>
            <div className="artifact-bars" aria-hidden="true">{[34, 52, 45, 73, 66, 91, 79, 98, 85, 110].map((height, i) => <i key={i} style={{ height }} />)}</div>
          </div>
        </div>
      </div>}
      {slug === "insight-studio" && <div className="artifact-window artifact-research">
        <div className="artifact-window-top"><span>Insight Studio</span><span>Research notebook</span><i /></div>
        <p className="artifact-small">Question 03 / returning users</p><h3>What makes someone<br />come back?</h3>
        <div className="artifact-source"><span>Source note</span><p>“I wanted to pick up where I left off.”</p><small>Example interview excerpt</small></div>
        <div className="artifact-research-line" aria-hidden="true" />
        <div className="artifact-finding"><span>Proposed finding</span><b>Make the unfinished task easy to find.</b><p>Check this interpretation against more source notes.</p></div>
        <div className="artifact-pills"><span>1 linked source</span><span>Needs review</span></div>
      </div>}
      {slug === "pocket-coach" && <div className="artifact-phone">
        <div className="artifact-phone-top"><span>9:41</span><i /></div><p className="artifact-small">Pocket Coach</p>
        <h3>A small thing<br />for today.</h3><div className="artifact-orbit" aria-hidden="true"><span /></div>
        <p className="artifact-commitment">Take a ten-minute walk.</p><span className="artifact-small">Your commitment · your pace</span>
        <div className="artifact-phone-action">I did my small thing</div><p className="artifact-phone-note">Missed yesterday? Today is still yours.</p>
      </div>}
      {slug === "sage-deck" && <div className="artifact-slides">
        <div className="artifact-slide"><span>Sage / product story</span><h3>A clearer story.<br />A better discussion.</h3><p>A product brief worth reading<br />before the meeting starts.</p><div className="artifact-slide-loop" aria-hidden="true" /><small>01 / The reason to care</small></div>
        <div className="artifact-slide-strip"><span>01<br /><b>The problem</b></span><span>02<br /><b>The evidence</b></span><span>03<br /><b>The proposal</b></span><span>04<br /><b>The business</b></span></div>
      </div>}
      {slug === "signal-desk" && <div className="artifact-window artifact-pipeline">
        <div className="artifact-window-top"><span>Signal Desk</span><span>Weekly brief / draft</span><i /></div>
        <h3>Keep the sources.<br />Skip the copying.</h3><div className="artifact-flow"><div><span>01</span><b>Source register</b><small>URLs, dates, notes</small></div><i aria-hidden="true">↓</i><div><span>02</span><b>Check & group</b><small>Missing fields stay visible</small></div><i aria-hidden="true">↓</i><div><span>03</span><b>Human review</b><small>Ready for an editor, not a send button</small></div></div>
        <div className="artifact-code"><span>brief.status</span> = <b>&quot;needs_review&quot;</b></div>
      </div>}
    </div>
  );
}
