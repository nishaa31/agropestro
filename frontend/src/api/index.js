import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
})

// ── Yield Prediction ──────────────────────
export const getYieldOptions = async () => {
  const res = await api.get('/yield/options')
  return res.data
}

export const predictYield = async (formData) => {
  const res = await api.post('/predict/yield', formData)
  return res.data
}

// ── Disease Detection ─────────────────────
export const predictDisease = async (imageFile) => {
  const form = new FormData()
  form.append('file', imageFile)
  const res = await api.post('/predict/disease', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return res.data
}

export const getDiseaseClasses = async () => {
  const res = await api.get('/disease/classes')
  return res.data
}

// ── Health Check ──────────────────────────
export const checkHealth = async () => {
  const res = await api.get('/health')
  return res.data
}
