export type Patient = {
  id: string;
  name: string;
  dob?: string;
  age?: string;
  mother?: string;
  hospital?: string;
  sector?: string;
  bed?: string;
  initials: string;
  code: string; // PA, PB...
};

export type Alarm = {
  id: string;
  patientId: string;
  title: string;        // "Reposicionar o paciente"
  enabled: boolean;
  everyHours: number;   // 2
  start: string;        // "08:00"
  end: string;          // "22:00"
};

const KEY_PATIENTS = "ps_patients";
const KEY_ALARMS = "ps_alarms";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getPatients(): Patient[] {
  return read<Patient[]>(KEY_PATIENTS, []);
}

export function savePatients(patients: Patient[]) {
  write(KEY_PATIENTS, patients);
}

export function addPatient(p: Omit<Patient, "id" | "code">): Patient {
  const patients = getPatients();
  const id = String(Date.now());

  const nextIndex = patients.length; // 0 -> A
  const code = `P${String.fromCharCode(65 + (nextIndex % 26))}`; // PA, PB, PC...

  const newPatient: Patient = { ...p, id, code };
  patients.push(newPatient);
  savePatients(patients);
  return newPatient;
}

export function getAlarms(): Alarm[] {
  return read<Alarm[]>(KEY_ALARMS, []);
}

export function saveAlarms(alarms: Alarm[]) {
  write(KEY_ALARMS, alarms);
}

export function upsertAlarm(alarm: Alarm) {
  const alarms = getAlarms();
  const idx = alarms.findIndex(a => a.id === alarm.id);
  if (idx >= 0) alarms[idx] = alarm;
  else alarms.push(alarm);
  saveAlarms(alarms);
}

export function getPatientById(id: string) {
  return getPatients().find(p => p.id === id);
}