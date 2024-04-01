const MainRoutes = {
    meta: {
        requiresAuth: true
    },
    path: '/',
    component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: () => import('@/views/dashboard/DefaultDashboard.vue')
        },
        {
            name: 'Employee',
            path: '/employees',
            component: () => import('@/views/employee/EmployeePage.vue')
        },
        {
            name: 'Attendance',
            path: '/attendance',
            children: [
                {
                    name: 'OnlineAttendance',
                    path: 'online-attendance',
                    component: () => import('@/views/attendance/OnlineAttendance.vue')
                },
                {
                    name: 'AttendanceRegularization',
                    path: 'attendance-regularization',
                    component: () => import('@/views/attendance/AttendanceRegularization.vue')
                },
                {
                    name: 'AtendanceReports',
                    path: 'attendance-reports',
                    component: () => import('@/views/attendance/AttendanceReport.vue')
                }

            ]
        },
        {
            name: 'Leave',
            path: '/leave',
            children: [
                {
                    name: 'ApplyLeave',
                    path: 'apply-leave',
                    component: () => import('@/views/leave/ApplyLeave.vue')
                },
                {
                    name: 'LeaveApplication',
                    path: 'leave-application',
                    component: () => import('@/views/leave/LeaveApplication.vue')
                },
                {
                    name: 'LeaveBalanceReport',
                    path: 'leave-balance-report',
                    component: () => import('@/views/leave/LeaveBalanceReport.vue')
                },
            ]
        },

        {
            name: 'Recuiter',
            path: '/recuiter',
            component: () => import('@/views/recuiter/RecuiterPage.vue')
        },

        {
            name: 'Payroll',
            path: '/payroll',
            children: [
                {
                    name: 'SalarySlip',
                    path: 'salary-slip',
                    component: () => import('@/views/payroll/SalarySlip.vue')
                }, {
                    name: 'TaxStatement',
                    path: 'tax-statement',
                    component: () => import('@/views/payroll/TaxStatement.vue')
                }
            ]
        },

        {
            name: 'Setting',
            path: '/setting',
            children: [
                {
                    name: 'Department',
                    path: 'departments',
                    component: () => import('@/views/setting/DepartmentPage.vue')
                }, {
                    name: 'Designation',
                    path: 'designations',
                    component: () => import('@/views/setting/DesignationPage.vue')
                },
                {
                    name: 'TimeSchedule',
                    path: 'time-schedule',
                    component: () => import('@/views/setting/TimeSchedule.vue')
                }
            ]
        },
        {
            name: 'Contact',
            path: '/contacts',
            component: () => import('@/views/contact/ContactPage.vue')
        },
        {
            name: 'Profile',
            path: '/profile',
            component: () => import('@/views/profile/ProfilePage.vue')
        },
        {
            name: 'other',
            path: '/sample-page',
            component: () => import('@/views/StarterPage.vue')
        }
    ]
};

export default MainRoutes;
