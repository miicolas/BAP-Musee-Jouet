export default function Logo({className, path, alt}) {
    return (
        <img src={path} alt={alt} className={`${className} rounded-lg`}/>
    )
}