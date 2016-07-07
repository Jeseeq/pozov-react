export const QuestionsData = [
  {
    id: 1,
    modal: true,
    question: 'Роботодавець є:?',
    tooltip: 'Виберіть один із варінтів',
    answers: [
      {
        id: 1,
        choice: 'Юридичною особою',
        modal: true
      },
      {
        id: 2,
        choice: 'Фізичною особою – підприємцем',
        modal: true
      },
      {
        id: 3,
        choice: 'Фізичною особою',
        modal: true
      }
    ]
  },
  {
    id: 2,
    question: 'Позов подається працівником чи його представником?',
    defaultChecked: 1,
    answers: [
      {
        id: 1,
        choice: 'Працівником'
      },
      {
        id: 2,
        choice: 'представником'
      }
    ]
  },
  {
    id: 3,
    question: 'Чи укладався письмовий договор?',
    defaultChecked: 2,
    answers: [
      {
        id: 1,
        choice: 'Так'
      },
      {
        id: 2,
        choice: 'Ні'
      }
    ]
  },
  {
    id: 4,
    question: 'Трудовий договір визначено як?',
    defaultChecked: 1,
    answers: [
      {
        id: 1,
        choice: 'Безстроковий, що укладений на невизначений строк'
      },
      {
        id: 2,
        choice: 'Строковий, що укладений на визначений строк, встановлений за погодженням сторін'
      },
      {
        id: 3,
        choice: 'Таким, що укладається на час виконання певної роботи'
      }
    ]
  },
  {
    id: 5,
    question: 'На даний час трудовий договір',
    answers: [
      {
        id: 1,
        choice: 'Не розірвано (Працівник продовжує роботу)'
      },
      {
        id: 2,
        choice: 'Розірвано'
      }
    ]
  }
]
export default QuestionsData
