import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { getProjects } from "../../store/reducers/getProjectsReducer";
import { getProjectsSelector } from "../../store/selectors/getProjectsSelector";
import styles from "./Objects.module.scss";

const Objects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const allProjects = useSelector(getProjectsSelector);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    setProjects(allProjects);
  }, [allProjects]);

  const onClickHandler = (id) => {
    // console.log("Worked");
    return navigate(`/projects/${id}`);
  };

  return (
    <div className={styles.projects}>
      <h1 className={styles.projects__title}>This is Objects page!</h1>
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
                <tr className={styles.table__dataRow} key={project._id} onClick={() => onClickHandler(project._id)}>
                  <td className={styles.table__data}>
                    {project.date}
                  </td>
                  <td className={styles.table__data}>
                    {project.address}
                  </td>
                  <td className={styles.table__data}>
                    {project.decor.name}
                  </td>
                  <td className={styles.table__data}>
                    {project.customer.name}
                  </td>
                  <td className={styles.table__data}>
                    {project.customer.phone}
                  </td>
                  <td className={styles.table__data}>
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
    </div>
  );
};
export default Objects;
