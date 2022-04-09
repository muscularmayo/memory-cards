import React, { useState } from 'react';

export default function BestScore (props) {
  return (
    <div className="best-score">
      Best Score : {props.bestScore}
    </div>
  )
}