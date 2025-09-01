import './TabButton.css'
export default function TabButton({children,...props}){

    return(
        <li>
            <button className={props.isSelected? 'active':undefined} {...props}>{children}</button>
        </li>
    );
}