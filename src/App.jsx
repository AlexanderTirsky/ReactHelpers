import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './componets/MainLayout'

function App() {

  // return <MainLayout />
  return <BrowserRouter>
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/forbidden" element={<div>forbidden!!!</div>} />
      <Route path="/addquestion" element={<div>add question</div>} />
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App
