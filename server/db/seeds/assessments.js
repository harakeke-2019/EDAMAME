exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('assessments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assessments').insert([
        {id: 1,
          module_id: 1,
          title: '1. Use Git and terminal commands to manage a code base',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 2,
          module_id: 1,
          title: '2. Use npm to manage library dependencies',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 3,
          module_id: 1,
          title: '3. Create well structured and tested code using JavaScript ES6',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 4,
          module_id: 1,
          title: '4. Design, build and use a relational database to persist data',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 5,
          module_id: 1,
          title: '5. Create code which reads and writes to the filesystem',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 6,
          module_id: 1,
          title: '6. Build a Command Line Interface tool',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 7,
          module_id: 2,
          title: '1. Produce and deploy a tested HTTP server with a restful JSON API',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 8,
          module_id: 2,
          title: '2. Create both server and client code that consumes a HTTP API',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 9,
          module_id: 2,
          title: '3. Create a rich client application using React and Redux',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 10,
          module_id: 2,
          title: '4. Create a responsive website using HTML and CSS',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 11,
          module_id: 2,
          title: '5. Use routing libraries to manage large client and server code bases',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 12,
          module_id: 2,
          title: '6. Secure a web application using Authentication libraries',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 13,
          module_id: 3,
          title: '1. Manage a programming team using agile management techniques',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 14,
          module_id: 3,
          title: '2. Give and receive constructive feedback to/from team mates',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 15,
          module_id: 3,
          title: '3. Present a technical project to a non-technical audience',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 16,
          module_id: 3,
          title: '4. Research a novel technology and teach it to others',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 17,
          module_id: 3,
          title: '5. Deliver a code review and provide technical feedback',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 18,
          module_id: 3,
          title: '6. Review a presentation and provide meaningful feedback',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 19,
          module_id: 4,
          title: '1. Create and follow a self-directed learning and personal development plan',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 20,
          module_id: 4,
          title: '2. Practice attentive listening and intentional clarifying questions',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 21,
          module_id: 4,
          title: '3. Display inclusive and supportive behaviour towards all team mates',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 22,
          module_id: 4,
          title: '4. Resolve interpersonal conflict in a technical project',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 23,
          module_id: 4,
          title: '5. Hold a difficult conversation',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        },
        {id: 24,
          module_id: 4,
          title: '6. Actively contribute to creating a productive and inclusive team culture',
          description: 'desc',
          link: 'link',
          week_day: 'weekday'
        }

      ])
    })
}
