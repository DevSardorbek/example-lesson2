import React from "react";
import "../../sass/components/category.scss";

function Category() {
  const cards = [
    {
      id: 1,
      images: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2837_108)">
            <path
              d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.6667 7H31.1354"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28 44.0052V44.0305"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="15.1667"
              y1="39.8333"
              x2="40.8333"
              y2="39.8333"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_2837_108">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Phones",
    },
    {
      id: 2,
      images: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2837_551)">
            <path
              d="M46.6667 9.33331H9.33333C8.04467 9.33331 7 10.378 7 11.6666V35C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 35V11.6666C49 10.378 47.9553 9.33331 46.6667 9.33331Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.3333 46.6667H39.6667"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 37.3333V46.6666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 37.3333V46.6666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 32H48"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2837_551">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Computers",
    },
    {
      id: 3,
      images: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2837_231)">
            <path
              d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 42V49H35V42"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 14V7H35V14"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="24"
              y1="23"
              x2="24"
              y2="34"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="28"
              y1="28"
              x2="28"
              y2="34"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="32"
              y1="26"
              x2="32"
              y2="34"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2837_231">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "SmartWatch",
    },
    {
      id: 4,
      images: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2837_108)">
            <path
              d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.6667 7H31.1354"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28 44.0052V44.0305"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="15.1667"
              y1="39.8333"
              x2="40.8333"
              y2="39.8333"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_2837_108">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Camera",
    },
    {
      id: 5,
      images: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2837_261)">
            <path
              d="M16.3333 30.3333H14C11.4227 30.3333 9.33331 32.4227 9.33331 35V42C9.33331 44.5773 11.4227 46.6666 14 46.6666H16.3333C18.9106 46.6666 21 44.5773 21 42V35C21 32.4227 18.9106 30.3333 16.3333 30.3333Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33331 35V28C9.33331 23.0493 11.3 18.3013 14.8007 14.8007C18.3013 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6986 11.3 41.1993 14.8007C44.7 18.3013 46.6666 23.0493 46.6666 28V35"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2837_261">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "HeadPhones",
    },
    {
      id: 6,
      images: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2837_923)">
            <path
              d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 28H23.3333M18.6667 23.3333V32.6666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 25.6667V25.6909"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42 30.3333V30.3574"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2837_923">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Gaming",
    },
  ];
  let prodacts = cards?.map((el, id) => (
    <div key={el.id} className="category_section_card">
      {el.images}
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section className="category_sections">
      <div className="container">
        <div className="category_title">
          <div className="title_one">
            <span></span>
            <p>Categories</p>
          </div>
          <h2>Browse By Category</h2>
        </div>
        <div className="category_section_cards">{prodacts}</div>
      </div>
    </section>
  );
}

export default Category;
