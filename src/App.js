import { Container, Content, Row } from './styles'
import  Button  from './components/Button';
import  Input  from './components/Input';

import { useState } from 'react';



const App = () => {


const [currentNumber, setCurrentNumber] = useState('0');
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState('');



const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')

    }
}

const handleMinusNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(currentNumber);
    setCurrentNumber('0')
    setOperation('-')
  } else {
    const sum = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')

  }
}

const handlePlusNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(currentNumber);
    setCurrentNumber('0')
    setOperation('*')
  } else {
    const sum = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')

  }
}

const handleDivideNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(currentNumber);
    setCurrentNumber('0')
    setOperation('/')
  } else {
    const sum = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')

  }
}

const handleEquals = () => {
 
  if(firstNumber !== '0' &&  operation !== '' && currentNumber !== '0'){
    switch(operation){
      case '+':
        handleSumNumbers();
        break;
      case '-':
        handleMinusNumbers();
        break;
      case '*':
        handlePlusNumbers();
        break;
      case '/':
        handleDivideNumbers();
        break;
  
      default:
        break;
    }
  } 
}


const handleAddNumber = (number) => {
  setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
}

const handleClear = () => {
  setCurrentNumber('0')
  setFirstNumber('0')
 };

 return (
    <Container>
     <Content>
       <Input value={currentNumber}/>

       <Row>
        <Button label="*" onClick={handlePlusNumbers} />
        <Button label="/" onClick={handleDivideNumbers}/>
        <Button label="C" onClick={() => handleClear()}/>
        <Button label="<-"/>
        </Row>

        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={handleMinusNumbers}/>
        </Row>

        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumbers}/>
        </Row>

        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')} />
        <Button label="2" onClick={() => handleAddNumber('2')} />
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
        </Row>

      </Content>
   </Container>
     
  );
}

export default App;
