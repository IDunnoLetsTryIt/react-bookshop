export default function TopMenuLink ({url, label, currentItem, setPage, setTestValue}) {
    const linkClicked = () =>{
        setPage(url);
    }
    return (
        <a 
        className={'link'+ (currentItem===url ? 'link--highlighted' :'')}
        href={'#'+url}
        onClick={linkClicked}
        >
            {label}
        </a>

    )

}