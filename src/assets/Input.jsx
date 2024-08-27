import styles from "./Input.module.css";

const Input =({hadleOnChange}) =>{

 

  return<>
  
  <input onChange={hadleOnChange} type="Enter Somthing" placeholder="Enter a Some word store" className={styles.Input}></input>
  </>
}
export default Input