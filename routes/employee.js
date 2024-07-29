const express = require('express');
const router = express.Router();

let employees =[{"name": "Abhimanyu", "course":"MBA","roll_no": "001", "id":1},
                {"name": "Abhira", "course":"BA","roll_no": "002", "id":2},      //Initialize array to store employees record

                {"name": "Akshara", "course":"MBBS","roll_no": "003", "id":3}
];                                                                                
router.get('/',(req,res) => {
    res.json(employees);
});

router.get('/id',(req,res) => {
    const employee = employees.find (emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(404).send('Employee not found')
    }
    res.json(employee);
});

router.post('/', (req, res) => {
    const newEmployee = {                    // Insert a New Employee Record (Create)
      id: employees.length + 1,
      name: req.body.name,
      course: req.body.course,
      roll_no: req.body.roll_no
    };
    employees.push(newEmployee);
    res.status(201).send('Employee added successfully');
  });
  
  router.put('/:id', (req, res) => {                                               // Update an Employee Record (Update)
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
      return res.status(404).send('Employee not found');
    }
    employee.name = req.body.name;
    employee.course = req.body.course;
    employee.roll_no = req.body.roll_no;
    res.status(201).send('Employee updated successfully');
  });
  

  router.patch('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {                                                                           // Partially Update an Employee Record (Update)
      return res.status(404).send('Employee not found');
    }
    if (req.body.name) employee.name = req.body.name;
    if (req.body.course) employee.course = req.body.course;
    if (req.body.roll_no) employee.roll_no = req.body.roll_no;
    res.status(201).send('Employee updated successfully');
  });
  

  router.delete('/:id', (req, res) => {
    const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));                      // Delete an Employee Record
    if (index === -1) {
      return res.status(404).send('Employee not found');
    }
    employees.splice(index, 1);
    res.status(204).send();
  });
  
  module.exports = router;