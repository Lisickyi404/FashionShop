import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
<ContentLoader 
    speed={2}
    width={440}
    height={550}
    viewBox="0 0 440 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
>
    <rect x="531" y="618" rx="3" ry="3" width="140" height="11" /> 
    <rect x="570" y="613" rx="3" ry="3" width="53" height="11" /> 
    <rect x="557" y="620" rx="3" ry="3" width="72" height="11" /> 
    <rect x="484" y="151" rx="3" ry="3" width="100" height="11" /> 
    <rect x="478" y="620" rx="3" ry="3" width="140" height="11" /> 
    <rect x="545" y="614" rx="3" ry="3" width="173" height="11" /> 
    <rect x="27" y="14" rx="0" ry="0" width="230" height="308" /> 
    <rect x="27" y="335" rx="0" ry="0" width="281" height="33" /> 
    <rect x="203" y="370" rx="0" ry="0" width="46" height="6" /> 
    <rect x="139" y="366" rx="0" ry="0" width="38" height="6" /> 
    <rect x="28" y="383" rx="0" ry="0" width="201" height="54" />
</ContentLoader>
)

export default MyLoader

