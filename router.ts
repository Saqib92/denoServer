import { Router} from 'https://deno.land/x/oak/mod.ts';
import {getActivities, getActivity, addActivity, updateActivity, deleteActivity, testCode, addUser, getUsers, getUser, updateUser} from './controllers/activity-contoller.ts';

const router = new Router();

router.get('/api/v1/activities', getActivities)
router.get('/api/v1/activities/:id', getActivity)
router.post('/api/v1/activities', addActivity)
router.put('/api/v1/activities/:id', updateActivity)
router.delete('/api/v1/activities/:id', deleteActivity)

router.get('/test', testCode);
router.post('/adduser', addUser);
router.get('/getusers', getUsers);
router.get('/getuser/:id', getUser);
router.put('/updateuser/:id', updateUser)

export default router;