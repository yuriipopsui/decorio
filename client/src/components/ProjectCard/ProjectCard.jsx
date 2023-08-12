import { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProjectById } from "../../store/reducers/getProjectReducer";
import { getProjectByIdSelector } from "../../store/selectors/getProjectsSelector";
import Loader from "../Loader/Loader";
import Button from "../common/Button/Button";

const ProjectCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [project, setProject] = useState({});
  const selectedProject = useSelector(getProjectByIdSelector);

  // console.log(selectedProject);
  // console.log(params.projectId);
  console.log(project);
  useEffect(() => {
    dispatch(getProjectById(params.projectId));
  }, [params.projectId, dispatch]);
  useEffect(() => {
    setProject(selectedProject);
  }, [selectedProject]);

  const onClickHandler = () => {
    return true;
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>Project Card Page</h2>

      {/* <div className={styles.card__info}>
        <h2 className={styles.card__info_title}>Service data Temporary</h2>
        <h3>ID: {project._id}</h3> */}
        {/* <h3>Date: {project.date}</h3>
          <h3>Customer name:{project?.customer?.name}</h3>
             <h2>{project?.decor?.name}</h2> */}
      {/* </div> */}
      <div className={styles.card__info}>
        <h2 className={styles.card__info_title}>Source data for Project</h2>
        <div className={styles.card__info_customer}>
          <p>Customer name: {project.customer?.name}</p>
          <p>Customer phone: {project.customer?.phone}</p>
        </div>
        <div className={styles.card__info_decor}>
          <p>Decor name: {project.decor?.name}</p>
          <p>Decor color: {project.decor?.color}</p>
          <p>Decor description: {project.decor?.description}</p>
        </div>
        <div className={styles.card__info_measures}>
          <p>
            {`Measures square: ${project.measure?.square} m `}
            <sup>
              <small>2</small>
            </sup>
          </p>
          <p>Measures linear: {project.measure?.linear} linear meters</p>
        </div>
        <Button
          buttonTitle={"Calculate"}
          buttonColor={"#2563a4"}
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
