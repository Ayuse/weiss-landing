import React, { useRef, useEffect } from 'react';
import './loader.scss';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

function getSectionHeight(element) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;

  return height / childElementCount;
}

function Loader() {
  gsap.registerPlugin(CustomEase);
  CustomEase.create('easey', '0.77,0,0.175,1');
  let countRef = useRef(null);
  const countRef2 = useRef(null);
  const tl = gsap.timeline({ defaults: { duration: 2, ease: 'easey' } });

  useEffect(() => {
    if (countRef.current) {
      const transformAmount = getSectionHeight(countRef.current);

      // tl.to(countRef.current, {
      //   // y: -1000,
      //   y: `-${transformAmount * 3}`,
      // });

      const sequence = new Array(3).fill('').flatMap((_, index) => [
        [
          countRef.current,
          {
            y: `-${transformAmount * (index + 1)}px`,
          },
        ],
        [
          countRef2.current,
          {
            y: `-${transformAmount * (index + 1)}px`,
          },
          '-=1.8',
        ],
      ]);

      console.log(sequence);
      sequence.map((seq) => {
        tl.to(seq[0], seq[1], seq[2]);
      });
    }
    console.log('a');
  }, []);

  return (
    <div className='loader-container'>
      <div className='counter-container'>
        <ul className='counter-list' ref={countRef}>
          <li>
            <h2>2</h2>
          </li>
          <li>
            <h2>4</h2>
          </li>
          <li>
            <h2>6</h2>
          </li>
          <li>
            <h2>9</h2>
          </li>
        </ul>
      </div>

      <div className='counter-container'>
        <ul className='counter-list' ref={countRef2}>
          <li>
            <h2>3</h2>
          </li>
          <li>
            <h2>9</h2>
          </li>
          <li>
            <h2>8</h2>
          </li>
          <li>
            <h2>9</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Loader;
