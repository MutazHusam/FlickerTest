import "./style.css";
interface ButtonProps {
    onClick: Function;
    text: string
  }
const Button:React.FC <ButtonProps> =  ({onClick, text }) => {
  return (
    <button onClick={()=>{onClick()}} className='customButton'>{text}</button>
  )
}
export default Button;
