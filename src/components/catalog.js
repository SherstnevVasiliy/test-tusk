import React, { useState, useEffect } from 'react';
import './mainPage.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ItemsCard from './itemsCard';
import NavItem from './navElement';

const Catalog = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        console.log(response.data);
        const catArr = response.data.slice();
        console.log('data', catArr);
        setCategory([...new Set(catArr.map((elem) => elem.category))]);
        console.log(category);
      } catch (err) {
        alert(err);
      }
    };
    getItem();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrap">
      <div className="page-header">
        <span className="page-header-arrow">
          <img alt="" />
        </span>
        <p className="page-header-catalog">Каталог</p>
        <figure className="smile-avatar" />
      </div>
      <form className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Найти товар..."
        />
      </form>
      <section>
        <ul className="section-catalog">
          <li className="section-popular">
            <a>Популярное</a>
          </li>
          <li className="section-view-all">
            <a>Смотреть все</a>
          </li>
        </ul>
        <div className="section-vitrina">
          {data.map((itemCards) => (
            <ItemsCard className="items-card" data={itemCards} key={uuidv4()} />
          ))}
        </div>
      </section>
      <section>
        <div className="section-wrap">
          <nav className="section-nav">
            <ul>
              {category.map((itemCards, index) => (
                <NavItem data={itemCards} id={index} key={uuidv4()} />
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
