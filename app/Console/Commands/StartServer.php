<?php


namespace App\Console\Commands;

use Symfony\Component\Process\Process;
use Illuminate\Console\Command;

class StartServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:start-server';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'start all servers.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        $this->info('starting services...');

        $processes = [
            'serve' => new Process(['php', 'artisan', 'serve', '--host=0.0.0.0']),
            'queue_work' => new Process(['php', 'artisan', 'queue:work']),
            'reverb_start' => new Process(['php', 'artisan', 'reverb:start', '--host=0.0.0.0']),
            'npm_watch' => new Process(['npm', 'run', 'watch'])
        ];

        foreach ($processes as $name => $process) {
            $process->start(function ($type, $buffer) use ($name) {
                if (Process::ERR === $type) {
                    $this->error("[$name] $buffer");
                } else {
                    $this->info("[$name] $buffer");
                }
            });
            $this->info("$name started...");
        }

        while (true) {
            foreach ($processes as $name => $process) {
                if (!$process->isRunning()) {
                    $this->error("process $name stopped.");
                }
            }
            sleep(1);
        }


        return 0;
    }
}
