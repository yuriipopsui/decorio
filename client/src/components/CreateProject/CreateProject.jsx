import styles from './CreateProject.module.scss';
import CreateProjectForm from '../common/CreateProjectForm/CreateProjectForm';

const CreateProject = () => {
  return (
    <>
    <h4 className={styles.createProject__title}>This is CreateProject page!</h4>
    <CreateProjectForm />
    </>
    

  )
}
export default CreateProject;