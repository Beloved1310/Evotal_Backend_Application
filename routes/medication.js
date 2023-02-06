const multer = require('multer')
const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const auth = require('../middleware/auth')

const storage = require('../utilis/multer')

const upload = multer({ storage })

const loadMedication = require('../controller/medications/loadmedication')
// const getAllMedication = require('../controller/Medication/getAllMedication')
// const getOneMedication = require('../controller/Medication/getOneMedication')
// const deleteMedication = require('../controller/Medication/deleteMedication')
// const updateMedication = require('../controller/Medication/updateMedication')

router.post('/:id', auth, upload.single('image'), asyncMiddleware(loadMedication))
// router.get('/:id', auth, asyncMiddleware(getAllMedication))
// router.get(
//   '/:postId/Medications/:MedicationId/getone',
//   auth,
//   asyncMiddleware(getOneMedication)
// )
// router.delete('/:MedicationId', auth, asyncMiddleware(deleteMedication))

// router.put('/putMedication/:MedicationId', auth, asyncMiddleware(updateMedication))

module.exports = router