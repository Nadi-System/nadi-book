
(defun run-selection-on-shell(BEG END)
  "Runs the selection in shell and displays and copies the results"
  (interactive "r")
  (let ((selection (buffer-substring-no-properties BEG END)))
    (if (= (car (read-multiple-choice
     (format "Run: %s" selection)
     '((?y "yes" "Run the command in shell")
       (?n "no" "Do not run")))
		) ?y )
	(let ((output (shell-command-to-string selection)))
	  (message output)
	  (kill-new output))
	(message "Cancelled")
    )))

;; echo "test"


(defun nadi-run-tasks-with-network (BEG END net)
  (interactive "r\nfNetwork File:")
  (let ((tasks-file (make-temp-file "tasks-")))
    (write-region BEG END tasks-file)
    (let ((output (shell-command-to-string (format "nadi -n %s %s" net tasks-file))))
	  (message output)
	  (kill-new output)
	  (delete-file tasks-file))))

(defun nadi-run-tasks (BEG END)
  (interactive "r")
  (let ((tasks-file (make-temp-file "tasks-"))
	;(tasks-text (buffer-substring-no-properties BEG END))
	)
    (write-region BEG END tasks-file)
    (let ((output (shell-command-to-string (format "nadi %s" tasks-file))))
	  (message output)
	  (kill-new output)
	  (delete-file tasks-file))))

;; node render("{NAME}")
