import React from 'react';

export default function hightlight(value, query) {
  if (value && query) {
    const highlightStart = value.toUpperCase().indexOf(query.trim().toUpperCase());
    const highlightEnd = highlightStart + query.trim().length;
    if (highlightStart !== -1) {
      return (
        <>
          {value.substring(0, highlightStart)}
          <strong>{value.substring(highlightStart, highlightEnd)}</strong>
          {value.substring(highlightEnd)}
        </>
      );
    }
  }
  return value;
}
