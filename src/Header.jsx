import React from 'react';

export default function Header() {
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
  return (
    <div>
      <h1>Todo</h1>
      <h4>{formattedDate}</h4>
    </div>
  );
}
