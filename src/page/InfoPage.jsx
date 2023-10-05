import React from 'react';
import { Link } from 'react-router-dom';
function InfoPage() {
  return (
    <>
      <h1>Info</h1>
      <span>знак зодиака</span>
      <select class="zodiac_sign">
        <option value="1">овен</option>
        <option value="2">телец</option>
        <option value="3">близнецы</option>
        <option value="4">рак</option>
        <option value="5">лев</option>
        <option value="6">дева</option>
        <option value="7">весы</option>
        <option value="8">скорпион</option>
        <option value="9">стрелец</option>
        <option value="10">козерог</option>
        <option value="11">водолей</option>
        <option value="12">рыбы</option>
      </select>
      <span>дата рождения</span>
      <select class="birthday">
        <option value="1">21.03-20.04</option>
        <option value="2">21.04-21.05</option>
        <option value="3">22.05-21.06</option>
        <option value="4">22.06-22.07</option>
        <option value="5">23.07-23.08</option>
        <option value="6">24.08-22.09</option>
        <option value="7">23.09-22ю10</option>
        <option value="8">23.10-22.11</option>
        <option value="9">23.11-21.12</option>
        <option value="10">22.12-20.01</option>
        <option value="11">21.01-20ю02</option>
        <option value="12">21.02-20.03</option>
      </select>
      <Link to="/.result">ResultPage</Link>
    </>
  );
}
export default InfoPage;
