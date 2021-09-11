import react, { useState } from "react";
import Header from "./headers/Header";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('head');

    const renderPage = () => {
        if (currentPage === "Head") {
            return <Header />;
        }if(currentPage === "Project"){
            return <Project />
        }if(currentPage === "Contact"){
            return <Contact />
    }
}
const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}

    </div>
)
}