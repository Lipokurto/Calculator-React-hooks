import { useCallback, useState } from 'react';
import '../App.css'


const Calc =()=> {
    const [firstNum,setFirstNum] = useState('')
    const [sumOne,setSumOne] = useState(0)
    const [expr,setExpr] = useState('')
    const [res,setRes] =useState(0)
  
    const first = useCallback((x)=> {
        if (x === '.') {
            if (firstNum.split('').find((el) => el === '.')) {
                setFirstNum(firstNum)
                setRes(0)
            } else {
                setFirstNum(firstNum.concat(x))
                setRes(0)
            }
        } else {
            setFirstNum(firstNum.concat(x))
            setRes(0)
        }
    },[firstNum])
  
    const one = useCallback((y)=>{
        setExpr(y)
        setSumOne(parseFloat(firstNum))
        setFirstNum('')
    },[firstNum])
  
  
  
    const result = useCallback(()=> {
      switch (expr) {
        case '+' : 
            setRes(sumOne + parseFloat(firstNum))
            setFirstNum('')
           break
        case '-' : 
            setRes(sumOne - parseFloat(firstNum))
            setFirstNum('')
           break
        case '*' : 
            setRes(sumOne * parseFloat(firstNum))
            setFirstNum('')
           break
        case '/' : 
            setRes(sumOne / parseFloat(firstNum))
            setFirstNum('')
           break
        default : 
          setRes(null)
         break
      }
    },[sumOne,firstNum,expr])
  
    const cancel = useCallback(()=> {
      setFirstNum('')
      setSumOne(0)
      setExpr('')
      setRes(0)
    },[])
  
    return (
      <div className="App">
        <h3>Калькулятор</h3>
        <div className="d-grid gap-1 col-3 mx-auto">
        <div>
           <input type='text' className='form-control-plaintext border' disabled={true} value={res===0 ? firstNum : res} />
        </div>
            <div>
                <button className="btn btn-primary" onClick={()=>first('7')}>7</button>
                <button className="btn btn-primary" onClick={()=>first('8')}>8</button>
                <button className="btn btn-primary" onClick={()=>first('9')}>9</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={()=>first('4')}>4</button>
                <button className="btn btn-primary" onClick={()=>first('5')}>5</button>
                <button className="btn btn-primary" onClick={()=>first('6')}>6</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={()=>first('1')}>1</button>
                <button className="btn btn-primary" onClick={()=>first('2')}>2</button>
                <button className="btn btn-primary" onClick={()=>first('3')}>3</button>
            </div>
            <div>
                <button className="col-2 btn btn-primary" onClick={()=>first('0')}>0</button>
                <button className="btn btn-primary" onClick={()=>first('.')}>,</button>
            </div>

        </div>
        <div>
          <button className="btn btn-info" onClick={()=>one('+')}>+</button>
          <button className="btn btn-info" onClick={()=>one('-')}>-</button>
          <button className="btn btn-info" onClick={()=>one('*')}>*</button>
          <button className="btn btn-info" onClick={()=>one('/')}>/</button>
        </div>
          <button className="btn btn-success" onClick={()=>result('=')}>=</button>
          <button className="btn btn-danger" onClick={()=>cancel()}>c</button>
      </div>
    );
}
export default Calc