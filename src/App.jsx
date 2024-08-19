import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EquipmentForm from './components/EquipmentForm';
import StudentForm from './components/StudentForm';
import TransactionForm from './components/TransactionForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
            <h1>Laboratory Inventory and Monitoring System</h1>
            <EquipmentForm />
            <StudentForm />
            <TransactionForm />
        </div>
    </>
  )
}

export default App
