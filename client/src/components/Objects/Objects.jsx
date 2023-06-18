import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/reducers/getProjectsReducer";
import { getProjectsSelector } from "../../store/selectors/getProjectsSelector";
import styles from "./Objects.module.scss";

const Objects = () => {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const allProjects = useSelector(getProjectsSelector);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    setProjects(allProjects);
  }, [allProjects]);

  const onClickHandler = () => {
    console.log("Worked");
  };

  return (
    <>
      <h1 className={styles.objects__title}>This is Objects page!</h1>
      <h3>Here will be shown All Objects of our Company</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__headRow}>
            <td className={styles.table__head}>Date</td>
            <td className={styles.table__head}>Address</td>
            <td className={styles.table__head}>Decor</td>
            <td className={styles.table__head}>Customer Name</td>
            <td className={styles.table__head}>Customer Phone</td>
            <td className={styles.table__head}>Status</td>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((project) => {
              return (
                <tr className={styles.table__dataRow} key={project._id}>
                  <td className={styles.table__data} onClick={onClickHandler}>
                    {project.date}
                  </td>
                  <td className={styles.table__data} onClick={onClickHandler}>
                    {project.address}
                  </td>
                  <td className={styles.table__data} onClick={onClickHandler}>
                    {project.decor.name}
                  </td>
                  <td className={styles.table__data} onClick={onClickHandler}>
                    {project.customer.name}
                  </td>
                  <td className={styles.table__data} onClick={onClickHandler}>
                    {project.customer.phone}
                  </td>
                  <td className={styles.table__data} onClick={onClickHandler}>
                    {project.offer && !project.inWork && !project.done
                      ? "Offer"
                      : project.offer && project.inWork && !project.done
                      ? "In Work"
                      : "Done"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Objects;
