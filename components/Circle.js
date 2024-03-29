import { useEffect, useState } from 'react';
import * as Tone from 'tone';
import styles from './../styles/Circle.module.css';
const Circle = ({
  theNote,
  setX,
  setY,
  innerWidth,
  innerHeight,
  octave,
  color,
  speed,
  shadow,
}) => {
  const [xPos, setXPos] = useState(setX);
  const [yPos, setYPos] = useState(setY);
  const [note, setNote] = useState(theNote);
  const [xInterval, setXInterval] = useState(10);
  const [yInterval, setYInterval] = useState(10);
  const [newSynth, setNewSynth] = useState(null);
  const [size, setSize] = useState(25);
  const [sizeAdd, setSizeAdd] = useState(1);
  useEffect(() => {
    //Tone.start();
    //setNewSynth(new Tone.Synth().toDestination());
  }, []);

  useEffect(() => {
    if (yPos >= innerHeight) {
      setYInterval(-10);
    } else if (yPos <= 0) {
      setYInterval(10);
    }

    if (xPos >= innerWidth) {
      setXInterval(-10);
    } else if (xPos <= 0) {
      setXInterval(10);
    }
  }, [yPos, xPos]);

  useEffect(() => {
    console.log(size);
    setTimeout(() => {
      if (size >= 45) {
        setSizeAdd(-1);
      } else if (size <= 25) {
        setSizeAdd(1);
      }
      setSize((prev) => {
        return prev + sizeAdd;
      });
    }, 50);
  }, [size]);

  /**  <useEffect(() => {
    let now = Tone.now();
    if (newSynth) {
        newSynth.triggerAttackRelease(
          `${theNote[Math.floor(Math.random() * 4)]}${octave}`,
          '4n', now
        );
        newSynth.triggerAttackRelease(
          `${theNote[Math.floor(Math.random() * 4)]}${octave}`,
          '4n', now + .25
        );
        newSynth.triggerAttackRelease(
          `${theNote[Math.floor(Math.random() * 4)]}${octave}`,
          '4n', now + .5
        );
    }
  }, [yInterval, xInterval]);
*/
  return (
    <circle
      cx={xPos.toString()}
      cy={yPos.toString()}
      r={String(size)}
      fill={'red'}
      style={shadow}
    />
  );
};

export default Circle;
