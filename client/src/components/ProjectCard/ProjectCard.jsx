import { useState, useEffect} from "react";
import styles from "./ProjectCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../store/reducers/getProjectReducer";
import { getProjectByIdSelector } from "../../store/selectors/getProjectsSelector";
import { getServices } from "../../store/reducers/getServiceReducer";
import {getServicesSelector} from "../../store/selectors/getServicesSelector";
import Loader from "../Loader/Loader";
import Button from "../common/Button/Button";
import DropdownChooseMenu from "../common/DropdownChooseMenu/DropdownChooseMenu";

const ProjectCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [project, setProject] = useState({});
  const [services, setServices] = useState({});
  const selectedProject = useSelector(getProjectByIdSelector);
  const selectedServices = useSelector(getServicesSelector);
  const {materials, works, workers} = services;

  useEffect(() => {
    dispatch(getProjectById(params.projectId));
  }, [params.projectId, dispatch]);
  useEffect(() => {
    setProject(selectedProject);
  }, [selectedProject]);

  console.log(project);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
  useEffect(() => {
    setServices(selectedServices);
  }, [selectedServices]);

  console.log(services);

  const onClickHandler = () => {
    return true;
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>Project Card Page</h2>
      <div className={styles.card__info}>
        <h3 className={styles.card__info_title}>Source data for Project</h3>
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
      </div>
      <div className={styles.card__info}>
        <h3 className={styles.card__info_title}>Calculate this Project</h3>
        <DropdownChooseMenu dataObject={materials} listName="Materials" />
        <DropdownChooseMenu dataObject={works} listName="Works" />
        <DropdownChooseMenu dataObject={workers} listName="Workers" />
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
