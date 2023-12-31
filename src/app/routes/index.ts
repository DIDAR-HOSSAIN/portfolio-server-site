import { StudentRoutes } from './../modules/student/student.route';
import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { SignUpRoutes } from '../modules/signUp/signup.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/signup',
    route: SignUpRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

/// // route create addational way

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters/', AcademicSemesterRoutes);

export default router;
