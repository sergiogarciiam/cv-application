export const getInputType = {
  start: "date",
  end: "date",
  phone: "number",
  link: "url",
};

export const getID = {
  personal: 0,
  about: 1,
  roles: 2,
  educations: 3,
  projects: 4,
  skills: 5,
  languages: 6,
};

export const getDataID = (e) => {
  return e.target.getAttribute("data-id");
};

export const getDataItemIndex = (e) => {
  return e.target.getAttribute("data-item-index");
};
