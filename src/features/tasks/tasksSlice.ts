import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { nanoid } from 'nanoid';

interface ITask {
  id: string;
  value: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
}

interface TasksState {
  value: ITask[];
  currentId: string;
  isModalOpen: boolean;
  modalValue: string;
  modalType: string;
}

const initialState: TasksState = {
  value: JSON.parse(window.localStorage.getItem('tasks')) || [],
  currentId: '',
  isModalOpen: false,
  modalValue: '',
  modalType: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const task: ITask = {
        id: nanoid(),
        value: action.payload,
        done: false,
        fixed: false,
        more: false,
      };

      state.value.push(task);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    doneTask: (state, action: PayloadAction<string>) => {
      state.value.forEach((task) => {
        if (task.id === action.payload) {
          task.done = !task.done;
          task.fixed = false;
        }
      });
    },
    fixedTask: (state, action: PayloadAction<string>) => {
      state.value.forEach((task) => {
        if (task.id === action.payload) {
          task.fixed = !task.fixed;
        }
      });
    },
    taskEdit: (state, action: PayloadAction<{ id: string; value: string }>) => {
      state.value.forEach((task) => {
        if (task.id === action.payload.id) {
          task.value = action.payload.value;
        }
      });
    },
    taskMoreSwitch: (state, action: PayloadAction<string>) => {
      state.value.forEach((task) => {
        if (task.id === action.payload) {
          task.more = !task.more;
        } else {
          task.more = false;
        }
      });
    },
    taskMoreClose: (state) => {
      state.value.forEach((task) => {
        task.more = false;
      });
    },
    tasksModalSwitch: (state, action: PayloadAction<{ id: string; type: string }>) => {
      const modalTask = state.value.filter((task) => task.id === action.payload.id);
      const [{ value: modalValue = '' } = {}] = modalTask;

      state.currentId = action.payload.id || '';
      state.isModalOpen = !state.isModalOpen;
      state.modalValue = modalValue;
      state.modalType = action.payload.type || 'add';
    },
  },
});

export const {
  addTask,
  deleteTask,
  doneTask,
  fixedTask,
  taskEdit,
  taskMoreSwitch,
  taskMoreClose,
  tasksModalSwitch,
} = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.value;

export const selectCurrentId = (state: RootState) => state.tasks.currentId;

export const selectModalType = (state: RootState) => state.tasks.modalType;

export const selectModalValue = (state: RootState) => state.tasks.modalValue;

export const selectIsModalOpen = (state: RootState) => state.tasks.isModalOpen;

export default tasksSlice.reducer;
