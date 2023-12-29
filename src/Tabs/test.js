import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarNavlinks } from "../../data/links";

export const Siderbar = () => {
  const [sidebarLinks, setSidebarLinks] = useState(sidebarNavlinks);

  function handleNavLinks(id) {
    const updatedLinks = sidebarLinks.map((link) => ({
      ...link,
      status: link.id === id ? "active" : "inactive",
    }));

    setSidebarLinks(updatedLinks);
  }

  function handleSubLink(e, mLinkId, sLinkId) {
    e.stopPropagation();

    const updatedLinks = sidebarLinks.map((link) => {
      if (link.id === mLinkId) {
        return {
          ...link,
          subLink: link.subLink.map((sLink) => ({
            ...sLink,
            status: sLink.id === sLinkId ? "active" : "",
          })),
        };
      } else {
        return { ...link };
      }
    });

    setSidebarLinks(updatedLinks);
  }

  return (
    <div className="sidebar">
      {/* {console.log(sidebarLinks)} */}
      <div className="sidebar-scroll">
        <div className="sidebar-menu">
          <ul>
            {sidebarLinks.map((mLink) => (
              <li
                key={mLink.id}
                className={`submenu ${mLink.status}`}
                onClick={() => handleNavLinks(mLink.id)}
              >
                <Link to={mLink.url} className={`subdrop ${mLink.status}`}>
                  <span className={`sidebar-icon ${mLink.status}`}>
                    {mLink.icon}
                  </span>
                  {mLink.mainLink}
                </Link>

                <ul>
                  {mLink.subLink.map((sLink) => (
                    <li
                      key={sLink.id}
                      onClick={(e) => handleSubLink(e, mLink.id, sLink.id)}
                    >
                      <Link to={sLink.url} className={sLink.status}>
                        <span className={`dot ${sLink.status}`}></span>
                        {sLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};