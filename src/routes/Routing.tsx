import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import RandomQuoteMachine from '@/pages/RandomQuoteMachine/RandomQuoteMachine.tsx';
import Cat from '@/pages/Cat/Cat.tsx';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cat" element={<Cat />} />
      <Route path="/machine" element={<RandomQuoteMachine />} />
      {/*<Route path="/login" element={<Login />} />*/}
      {/*<Route path="/register" element={<Register />} />*/}
    </Routes>
  );
};

export default Routing;
