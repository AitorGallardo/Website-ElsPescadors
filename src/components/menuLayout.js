import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import SideBar from "./sidebar"
import SEO from "./seo"
import Footer from "./footer"

const MenuLayout = ({ children, props }) => {
    const [isSidebarOpen, setSidebar] = useState(false);

    return (
        <>
            <SEO title="Carta" />
            <SideBar id="sidebar" mainId="menu" open={isSidebarOpen} onClickClose={(e) => setSidebar(false)} pageWrapId={"page-wrap"} outerContainerId={"container"} />
            <Header mainId="menu" toggleSidebar={() => setSidebar(true)} />
            <main >{children}</main>
            <Footer />
        </>
    )
}

MenuLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MenuLayout
