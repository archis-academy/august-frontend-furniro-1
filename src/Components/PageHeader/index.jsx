import { useLocation } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb';
import './page.scss'; 

const formatPathToTitle = (text) => {
    if (!text || typeof text !== 'string') {
        return 'Home'; 
    }
    return text.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
};

const PageHeader = () => {
    const location = useLocation();
    const pathParts = location.pathname.split("/").filter(Boolean);

    // Ana sayfa ise 'Home', değilse ilk parçayı başlık yap
    let mainTitle = "Home"; 
    
    if (pathParts.length > 0) {
        const targetPart = pathParts[0]; 
        mainTitle = formatPathToTitle(targetPart);
    }

    return (
        <div className="page-header-container">
            <div className="page-logo-placeholder"><img src="./assets/page-header/ph-logo.png" alt="" /></div> 
            
            <h1 className="main-page-title">{mainTitle}</h1>
            
            <div className="breadcrumb-wrapper">
                <BreadCrumb /> 
            </div>
        </div>
    );
};

export default PageHeader;