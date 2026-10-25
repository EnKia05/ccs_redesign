// Source: ccs.cpu.edu.ph/faculty-and-staff
const BASE_IMG_URL = 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11'

const MSCS = 'Master of Science in Computer Science'
const MBA = 'Master in Business Administration'
const MLIS = 'Master of Library and Information Science'
const PHD = 'Doctor of Philosophy (Ph.D.)'

export interface Person {
  name: string
  role: string
  education: string
  photo: string
}

export interface Department {
  title: string
  people: Person[]
}

export const facultyData: Department[] = [
  {
    title: 'Office of the Dean',
    people: [
      { 
        name: 'Ma. Christina A. Quijano', 
        role: 'Dean', 
        education: MSCS, 
        photo: `${BASE_IMG_URL}/quijano-e1637132499305.png` 
      }
    ]
  },
  {
    title: 'Department Head and Coordinators',
    people: [
      { 
        name: 'Rea P. Balontong', 
        role: 'Department Head (IT)', 
        education: MBA, 
        photo: `${BASE_IMG_URL}/balontong-754x1024.jpg` 
      },
      { 
        name: 'Marjee Rose B. Parreño', 
        role: 'Program Coordinator (BSCS, BSDMIA, MSCS)', 
        education: `${MSCS}; ${MBA}`, 
        photo: `${BASE_IMG_URL}/parreno-754x1024.jpg` 
      },
      { 
        name: 'Ana Mae B. Cantel', 
        role: 'Program Coordinator (BLIS, MLIS)', 
        education: MLIS, 
        photo: `${BASE_IMG_URL}/cantel-754x1024.jpg` 
      },
      { 
        name: 'Lennon D. Pajar', 
        role: 'Computer Laboratory Coordinator', 
        education: '', 
        photo: `${BASE_IMG_URL}/pajar-754x1024.jpg` 
      }
    ]
  },
  {
    title: 'Faculty',
    people: [
      { 
        name: 'Leo Paulo B. Beldia', 
        role: 'BSIT Program', 
        education: '', 
        photo: `${BASE_IMG_URL}/beldia-754x1024.jpg` 
      },
      { 
        name: 'Pedro Peter Rhys B. Cambronero', 
        role: 'BSCS Program', 
        education: MSCS, 
        photo: `${BASE_IMG_URL}/cambronero-754x1024.jpg` 
      },
      { 
        name: 'Lesley Joy L. Dignadice', 
        role: 'BSIT Program', 
        education: MBA, 
        photo: `${BASE_IMG_URL}/dignadice-1-754x1024.jpg` 
      },
      { 
        name: 'Rodolfo C. Eregia, Jr.', 
        role: 'BSIT Program', 
        education: '', 
        photo: `${BASE_IMG_URL}/eregia-754x1024.jpg` 
      },
      { 
        name: 'Donie S. Jardeleza', 
        role: 'BSIT Program', 
        education: MSCS, 
        photo: `${BASE_IMG_URL}/jardleza-754x1024.jpg` 
      },
      { 
        name: 'Antonio M. Montaño, Jr.', 
        role: 'BSIT Program', 
        education: '', 
        photo: `${BASE_IMG_URL}/montano-754x1024.jpg` 
      },
      { 
        name: 'Rose Leah Joy A. Ojacastro', 
        role: 'BSIT Program', 
        education: MSCS, 
        photo: `${BASE_IMG_URL}/ojacastro-754x1024.jpg` 
      },
      { 
        name: 'Ma. Sheila C. Sapul', 
        role: 'BSCS Program', 
        education: PHD, 
        photo: `${BASE_IMG_URL}/sapul-754x1024.jpg` 
      }
    ]
  },
  {
    title: 'Staff',
    people: [
      { 
        name: 'Chrislyn C. Castaño', 
        role: 'Secretary', 
        education: '', 
        photo: `${BASE_IMG_URL}/castano-754x1024.jpg` 
      },
      { 
        name: 'A.M.P. Latter P. Taasan', 
        role: 'Computer Laboratory Technician', 
        education: '', 
        photo: `${BASE_IMG_URL}/taasan-754x1024.jpg` 
      },
      { 
        name: 'Chriselda Elaine Ador', 
        role: 'Guidance Counselor', 
        education: '', 
        photo: `${BASE_IMG_URL}/ador-754x1024.jpg` 
      },
      { 
        name: 'Donna May Rivera', 
        role: 'Library Liaison Officer', 
        education: '', 
        photo: `${BASE_IMG_URL}/rivera-754x1024.png` 
      }
    ]
  }
]