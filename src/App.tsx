import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { rickDataAction } from './actions/rickActions';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.rickReducer);

  useEffect(() => {
    dispatch(rickDataAction());
  },[dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <h1>Testing</h1>
      <hr />
      <Slider {...settings}>
        {data.map((res: any) => (
          <div>
            <img src={res.image} alt="pic" />
          </div>
        ))}
      </Slider>
      
    </div>
  );
}

export default App;
